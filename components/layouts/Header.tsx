"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <header className="bg-[#2E2E2E] text-white border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-[2rem] h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold">TechJobs AU</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-end flex-1">
            <div className="flex space-x-8">
              <Link href="/jobs" className="text-lg font-medium text-gray-300 hover:text-white transition duration-300">
                Find Jobs
              </Link>
              <Link
                href="/companies"
                className="text-lg font-medium text-gray-300 hover:text-white transition duration-300"
              >
                Companies
              </Link>
              <Link
                href="/resources"
                className="text-lg font-medium text-gray-300 hover:text-white transition duration-300"
              >
                Resources
              </Link>
            </div>
          </nav>

          <div className="flex items-center">
            <div className="hidden md:block">
              <Link
                href="/post-job"
                className="px-6 py-2 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Post a Job
              </Link>
            </div>
            <div className="flex items-center md:hidden">
              <button
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2E2E2E]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/jobs"
              className="block px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
            >
              Find Jobs
            </Link>
            <Link
              href="/companies"
              className="block px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
            >
              Companies
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
            >
              Resources
            </Link>
            <div className="mt-4">
              <Link
                href="/post-job"
                className="block w-full px-6 py-3 text-center text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

