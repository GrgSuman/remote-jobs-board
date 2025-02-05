"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Building2,
  DollarSign,
  BarChart2,
  Settings,
  User,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/employer", icon: Home },
  { name: "Jobs", href: "/employer/jobs", icon: Briefcase },
  { name: "Companies", href: "/employer/companies", icon: Building2 },
  { name: "Billing", href: "/employer/billing", icon: DollarSign },
  { name: "Analytics", href: "/employer/analytics", icon: BarChart2 },
  { name: "Settings", href: "/employer/settings", icon: Settings },
];

export default function EmployerNav({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <div className="flex flex-col h-screen">
      {/* Main content area with sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <div
          className={`bg-gray-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition duration-200 ease-in-out z-30`}
        >
          <div className="flex items-center justify-between mb-6 px-4">
            <h2 className="text-2xl font-bold text-blue-400">EmployerHub</h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded transition duration-150 ease-in-out ${
                  pathname === item.href
                    ? "bg-blue-700 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <item.icon className="h-6 w-6" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          {/* Top Navigation */}
          <nav className="bg-gray-900 sticky top-0 z-50 shadow-md">
            <div className=" px-6">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md text-gray-400 flex items-center gap-2 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
                  >
                    <span className="sr-only">Toggle sidebar</span>
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <h2 className="text-2xl md:hidden font-bold text-blue-400">EmployerHub</h2>
                </div>

                <div className="flex items-center">
                  <div className="ml-3 relative">
                    <button
                      onClick={toggleProfile}
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                    >
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold">
                        S
                      </div>
                    </button>
                    {isProfileOpen && (
                      <div className="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Link
                          href="/profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          <User
                            className="mr-3 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          Profile
                        </Link>
                        <button
                          onClick={() => console.log("Logout")}
                          className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          <LogOut
                            className="mr-3 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="p-6">
            {/* Your main content goes here */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
