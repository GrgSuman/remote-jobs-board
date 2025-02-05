"use client"

import { useState } from "react"
import Link from "next/link"
import { User, LogOut, Menu } from "lucide-react"

export default function TopNav() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-400 flex items-center gap-2 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden">
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            <h2 className="text-xl font-bold text-white">Employer Hub</h2>
            </button>
      
          </div>

          <div className="flex items-center">
            <div className="ml-3 relative">
              <div>
                <button
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                </button>
              </div>
              {isProfileOpen && (
                <div className="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    <User className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Profile
                  </Link>
                  <button
                    onClick={() => console.log("Logout")}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  >
                    <LogOut className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

