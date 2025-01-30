import { auth } from '@/auth'
import SignupPage from '@/components/forms/Signup'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()
  if(session?.user)
     redirect("/")
  return (
    <SignupPage/>
  )
}

export default page