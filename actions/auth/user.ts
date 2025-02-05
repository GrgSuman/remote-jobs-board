"use server"

import { z } from "zod"
import { prisma } from "@/lib/db"
import { signIn, signOut } from "@/auth"
import { hash } from "bcryptjs"

const SignupSchema = z
  .object({
    fullName: z.string().min(3, "Full name must be at least 3 characters long").nonempty("Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string(),
    userType: z.enum(["seeker", "employer"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export type SignupFormData = z.infer<typeof SignupSchema>

export async function signup(formData: SignupFormData) {
  const result = SignupSchema.safeParse(formData)

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  try {
    const hashedPassword = await hash(result.data.password, 10)

    const user = await prisma.user.create({
      data: {
        name: result.data.fullName,
        email: result.data.email,
        password: hashedPassword,
        userType: result.data.userType,
      },
    })

    console.log(123)

    if (user) {
      return { success: true }
    }
  } catch (error) {
    if (error instanceof Error) {
      if ("code" in error && error.code === "P2002") {
        return { success: false, errors: { email: ["Email already exists"] } }
      }
    }

    console.log(JSON.stringify(error))

    return { success: false, errors: { _form: ["An unexpected error occurred. Please try again."] } }
  }
}


export const login = async (loginData: { email: string; password: string }) => {
    try{
       await signIn("credentials", {redirect: false, email: loginData.email, password: loginData.password });
       return {success: true}
    }
    catch(err){
        return {success: false}
    }

}

export const logout = async () => {
  await signOut()
}
