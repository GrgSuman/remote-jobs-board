"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, AlertCircle, UserSearch, Briefcase, Eye, EyeOff } from "lucide-react"
import { signup, type SignupFormData } from "@/actions/auth/user"
import Spinner from "@/components/Spinner"
import { redirect } from "next/navigation"

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState("")
  const [userType, setUserType] = useState<"seeker" | "employer" | null>(null)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})
    setMessage("")

    const formData: SignupFormData = {
      email,
      password,
      confirmPassword,
      userType: userType as "seeker" | "employer",
    }

    const result = await signup(formData)

    if (result.success) {
        setMessage("Signup successful!")
        redirect("/login")
    }

    if (!result.success) {
        setErrors(result.errors || {})
    } 
    setIsLoading(false)
  }

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    if (field === "password") {
      setShowPassword(!showPassword)
    } else {
      setShowConfirmPassword(!showConfirmPassword)
    }
  }

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-8 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex items-center text-gray-600 mb-4 hover:text-gray-900 transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          Back to Job Board
        </Link>
      </div>

      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Discover your next opportunity</h2>
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => setUserType("seeker")}
              className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                userType === "seeker" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <UserSearch size={32} />
              <span className="mt-2 font-medium">Job Seeker</span>
            </button>
            <button
              onClick={() => setUserType("employer")}
              className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                userType === "employer" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Briefcase size={32} />
              <span className="mt-2 font-medium">Recruiter</span>
            </button>
          </div>
          {errors.userType && <p className="text-red-500 text-sm mt-1">Please select a user type</p>}

          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label htmlFor="email" className="block text-xl mb-1 font-medium text-gray-700">
                Email address
              </label>
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 text-base border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
              {errors?._form && <p className="text-red-500 text-sm mt-1">{errors?._form[0]}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-xl mb-1 font-medium text-gray-700">
                New Password
              </label>
              <div className="relative flex-grow">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 text-base border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("password")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password[0]}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-xl mb-1 font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative flex-grow">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 text-base border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword[0]}</p>}
            </div>

            {message && (
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">{message}</h3>
                  </div>
                </div>
              </div>
            )}

            <div>
            {isLoading ? <div className="w-full flex justify-center"><Spinner/></div>  : <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-[10px] shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create Account
              </button>}
              
            </div>
          </form>
        </div>
      </div>

      <p className="mt-8 text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
          Login
        </Link>
      </p>
    </div>
  )
}

export default SignupPage

