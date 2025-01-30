import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import Header2 from "@/components/layouts/Header2";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { Inter } from 'next/font/google'
import { auth } from "@/auth";

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()
  const user = session?.user
  return (
    <html lang="en" className={inter.className}>
      <body lang="en" suppressHydrationWarning>
          <Header2 user={user}/>
          <main>{children}</main>
          <Footer/>
      </body>
    </html>
  );
}
