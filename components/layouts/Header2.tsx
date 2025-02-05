"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, LogOut } from "lucide-react"
import { usePathname } from "next/navigation"
import { logout } from "@/actions/auth/user"

const Header2 = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const pathname = usePathname()

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  if (pathname.startsWith("/admin") || pathname.startsWith("/seeker") || pathname.startsWith("/employer")) return null

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
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 text-red-500 hover:text-red-600 font-medium transition-colors"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                    {userLink.label}
                  </span>
                  <ChevronDown size={20} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-10">
                    <Link
                      href={userLink.href}
                      className="block hover:bg-gray-100 px-4 py-3 text-red-500 font-medium hover:text-red-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      className="block hover:bg-gray-100 w-full text-left px-4 py-3 text-red-500 font-medium hover:text-red-600 transition-colors"
                      onClick={() => {
                        setIsDropdownOpen(false)
                        logout()
                      }}
                    >
                      <span className="flex items-center">
                        <LogOut size={18} className="mr-2" />
                        Logout
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href={userLink.href} className="text-red-500 hover:text-red-600 font-medium transition-colors">
                {userLink.label}
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-red-500 focus:outline-none focus:text-red-500"
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
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 text-red-500 hover:text-red-600 font-medium transition-colors"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                      {userLink.label}
                    </span>
                    <ChevronDown size={20} />
                  </button>
                  {isDropdownOpen && (
                    <div className="mt-2 bg-white rounded-md shadow-lg py-2">
                      <Link
                        href={userLink.href}
                        className="block px-4 py-3 text-red-500 font-medium hover:text-red-600 transition-colors hover:bg-gray-100"
                        onClick={() => {
                          setIsDropdownOpen(false)
                          setIsMenuOpen(false)
                        }}
                      >
                        Dashboard
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-3  hover:bg-gray-100"
                        onClick={() => {
                          setIsDropdownOpen(false)
                          setIsMenuOpen(false)
                          logout();
                        }}
                      >
                        <span className="flex text-red-500 hover:text-red-600 items-center">
                          <LogOut size={18} className="mr-2" />
                          Logout
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={userLink.href}
                  className="text-red-500 hover:text-red-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {userLink.label}
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header2

