import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { prisma } from "./lib/db";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,

    Credentials({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },


      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new Error("Please provide both email & password");
        }

        const user = await prisma.user.findUnique({
          where: {
            email
          },
        })


        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password did not matched");
        }

        const userData = {
          name: user.name,
          email: user.email,
          role: user.userType,
          id: user.id,
          profileImage: user.profileImage
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login",
  },

  callbacks: {
    async authorized({ request, auth }) {
      const { pathname } = request.nextUrl

      // private routes and their required roles
      const privateRoutes = [
        { path: "/admin", role: "admin" },
        { path: "/employer", role: "employer" },
        { path: "/seeker", role: "seeker" },
      ]

      // Check if the current path matches any protected route
      const matchedRoute = privateRoutes.find((route) => pathname.startsWith(route.path))

      if (matchedRoute) {
        // If it's an admin route, check for admin role
        return auth?.user?.role === matchedRoute.role
      }

      if(pathname.startsWith("/post-job")){
        return auth?.user?.role === "admin" || auth?.user?.role === "employer"
      }

      // For all other routes, allow access
      return true
    },

    async jwt({ token, user, account }) {
      if (account && user) {
        // Add custom fields from authorize to the token
        token.role = user.role
        token.email = user.email
        token.id = user.id
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      // Add custom fields from token to the session
      session.user.role = token.role
      session.user.email = token.email
      session.user.id = token.id
      session.user.name = token.name
      session.user.profileImage = token.profileImage
      return session
    }
  },
});