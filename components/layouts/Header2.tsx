"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const Header2 = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const pathname = usePathname()
  if (pathname.startsWith("/admin")) return null

  const menuItems = [
    { href: "#", label: "Twitter" },
    { href: "#", label: "Newsletter" },
    { href: "#", label: "Resources" },
    ...(user?.role !== "seeker" ? [{ href: "/post-job", label: "Post a Job" }] : []),
  ]

  const userLink = user
    ? {
        href: user.role === "seeker" ? "/seeker" : user.role === "employer" ? "/employer" : "/admin",
        label: user.email[0],
      }
    : { href: "/login", label: "Sign in" }

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-xl font-bold">
              TECHJOBS BOARD
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-red-500 font-medium hover:text-red-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={userLink.href}
              className={`${
                user
                  ? "text-white bg-blue-500 block rounded-full px-[17px] py-[10px]"
                  : "text-red-500 hover:text-red-600"
              } font-medium transition-colors`}
            >
              {userLink.label}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-red-500 font-medium hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={userLink.href}
                className={`${
                  user
                    ? "text-white w-[fit-content] bg-blue-500 rounded-full px-4 py-2 inline-block"
                    : "text-red-500 hover:text-red-600"
                } font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {user ? `Dashboard (${userLink.label})` : userLink.label}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header2

