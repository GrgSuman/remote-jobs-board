"use client"

import { useState, useEffect, useRef } from "react"
import { Search, MapPin, Briefcase, Code2, GraduationCap, DollarSign, Laptop } from "lucide-react"

const jobTypes = ["Full Time", "Part Time", "Contract", "Freelance"]
const jobCategories = ["Frontend", "Backend", "Full Stack", "UI/UX Design", "DevOps", "Product"]

export default function Hero() {
  const [jobSearch, setJobSearch] = useState("")
  const [location, setLocation] = useState("")
  const [types, setTypes] = useState<string[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [experience, setExperience] = useState<string[]>([])
  const [salary, setSalary] = useState<string[]>([])
  const [remote, setRemote] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const filterRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Filtering jobs:", { jobSearch, location, types, categories, experience, salary, remote })
  }

  const handleTypeChange = (type: string) => {
    setTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const handleCategoryChange = (category: string) => {
    setCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setActiveFilter(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-6 text-center">
          Find tech jobs at startups & tech companies
        </h1>

        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto text-center">
          Connect with leading tech companies and innovative startups across Australia. Your next career opportunity
          awaits.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 max-w-5xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
                placeholder="Job title, skills, or company"
                className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                required
              />
            </div>
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Search Jobs
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 items-center" ref={filterRef}>
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleFilter("jobType")}
                className={`flex items-center px-4 py-2 rounded-full border ${types.length > 0 ? "border-blue-500 text-blue-600" : "border-gray-300 text-gray-700"} hover:border-blue-500 hover:text-blue-600 transition-colors duration-300`}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Job Type {types.length > 0 && `(${types.length})`}
              </button>
              {activeFilter === "jobType" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={types.includes(type)}
                        onChange={() => handleTypeChange(type)}
                        className="mr-2 w-5 h-5"
                      />
                      <span className="ml-2">{type}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => toggleFilter("jobCategory")}
                className={`flex items-center px-4 py-2 rounded-full border ${categories.length > 0 ? "border-blue-500 text-blue-600" : "border-gray-300 text-gray-700"} hover:border-blue-500 hover:text-blue-600 transition-colors duration-300`}
              >
                <Code2 className="mr-2 h-4 w-4" />
                Job Category {categories.length > 0 && `(${categories.length})`}
              </button>
              {activeFilter === "jobCategory" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {jobCategories.map((category) => (
                    <label key={category} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2 w-5 h-5"
                      />
                      <span className="ml-2">{category}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => toggleFilter("experience")}
                className={`flex items-center px-4 py-2 rounded-full border ${experience.length > 0 ? "border-blue-500 text-blue-600" : "border-gray-300 text-gray-700"} hover:border-blue-500 hover:text-blue-600 transition-colors duration-300`}
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Experience {experience.length > 0 && `(${experience.length})`}
              </button>
              {activeFilter === "experience" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {["Entry Level", "Mid Level", "Senior", "Lead", "Manager"].map((level) => (
                    <label key={level} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={experience.includes(level)}
                        onChange={() =>
                          setExperience((prev) =>
                            prev.includes(level) ? prev.filter((e) => e !== level) : [...prev, level],
                          )
                        }
                        className="mr-2 w-5 h-5"
                      />
                      <span className="ml-2">{level}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => toggleFilter("salary")}
                className={`flex items-center px-4 py-2 rounded-full border ${salary.length > 0 ? "border-blue-500 text-blue-600" : "border-gray-300 text-gray-700"} hover:border-blue-500 hover:text-blue-600 transition-colors duration-300`}
              >
                <DollarSign className="mr-2 h-4 w-4" />
                Salary {salary.length > 0 && `(${salary.length})`}
              </button>
              {activeFilter === "salary" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {["$0-$50k", "$50k-$100k", "$100k-$150k", "$150k-$200k", "$200k+"].map((range) => (
                    <label key={range} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={salary.includes(range)}
                        onChange={() =>
                          setSalary((prev) =>
                            prev.includes(range) ? prev.filter((s) => s !== range) : [...prev, range],
                          )
                        }
                        className="mr-2 w-5 h-5"
                      />
                      <span className="ml-2">{range}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setRemote(!remote)}
              className={`flex items-center px-4 py-2 rounded-full border ${remote ? "border-blue-500 text-blue-600" : "border-gray-300 text-gray-700"} hover:border-blue-500 hover:text-blue-600 transition-colors duration-300`}
            >
              <Laptop className="mr-2 h-4 w-4" />
              Remote Only
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

