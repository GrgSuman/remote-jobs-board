"use client"
import Link from "next/link"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"

export function Footer() {
    const pathname = usePathname()
    if (pathname.startsWith("/admin") || pathname.startsWith("/seeker") || pathname.startsWith("/employer")) return null
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">TechJobs AU</h2>
            <p className="text-sm mb-4">Connecting top tech talent with leading companies across Australia.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-white transition-colors">
                  Browse Companies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link href="/salary-guide" className="hover:text-white transition-colors">
                  Salary Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/post-job" className="hover:text-white transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/employer-resources" className="hover:text-white transition-colors">
                  Employer Resources
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Get the latest jobs and industry news</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} TechJobs AU. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <Link href="/privacy" className="text-sm hover:text-white transition-colors mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

