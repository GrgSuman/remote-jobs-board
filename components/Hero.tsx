"use client"

import { useState } from "react"
import { Search, MapPin, Briefcase, Building2 } from "lucide-react"

export default function Hero() {
  const [keywords, setKeywords] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Searching for:", { keywords, location })
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-800">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl  mb-6 ">
              Discover Your Ideal Tech Career in Australia
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with leading tech companies and innovative startups across Australia. Your next career opportunity
              awaits.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-lg shadow-lg">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="Job title, skills, or company"
                  className="w-full text-lg py-3 pl-12 pr-4 rounded-md border-0 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300 placeholder-gray-400 text-gray-800"
                  required
                />
              </div>
              <div className="relative flex-grow">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or state"
                  className="w-full text-lg py-3 pl-12 pr-4 rounded-md border-0 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300 placeholder-gray-400 text-gray-800"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md hover:shadow-lg"
              >
                Search Jobs
              </button>
            </div>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <span className="text-3xl font-bold text-gray-800">10,000+</span>
              <p className="text-lg text-gray-600 mt-2">Jobs Posted</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Building2 className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <span className="text-3xl font-bold text-gray-800">500+</span>
              <p className="text-lg text-gray-600 mt-2">Companies Hiring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg
                className="w-12 h-12 text-blue-600 mb-4 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-3xl font-bold text-gray-800">100%</span>
              <p className="text-lg text-gray-600 mt-2">Secure Process</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg
                className="w-12 h-12 text-blue-600 mb-4 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-3xl font-bold text-gray-800">24/7</span>
              <p className="text-lg text-gray-600 mt-2">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



