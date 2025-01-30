import { auth } from '@/auth'
import LoginPage from '@/components/forms/Login'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()
  if(session?.user)
     redirect("/")
  return (
    <LoginPage/>
  )
}

export default page