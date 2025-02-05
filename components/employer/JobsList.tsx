"use client"

import { useState } from "react"
import { Pencil, Trash, ExternalLink, Briefcase, MapPin, DollarSign, Clock, Search, Filter } from "lucide-react"

// Mock data for jobs
const initialJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    description: "We are looking for an experienced React developer to join our team...",
    type: "Full-time",
    salaryRange: "$120k - $150k",
    location: "Remote in Australia",
    skills: ["React", "TypeScript", "Node.js"],
    experience: "Senior",
    applicationLink: "https://example.com/apply",
    createdAt: new Date("2023-05-01"),
    updatedAt: new Date("2023-05-05"),
    companyId: 1,
    companyName: "TechCorp",
    companyLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    title: "UX Designer",
    description: "We're seeking a talented UX designer to create intuitive user experiences...",
    type: "Contract",
    salaryRange: "$80k - $100k",
    location: "Sydney, Australia",
    skills: ["Figma", "User Research", "Prototyping"],
    experience: "Mid-level",
    applicationLink: "https://example.com/apply",
    createdAt: new Date("2023-05-03"),
    updatedAt: new Date("2023-05-03"),
    companyId: 2,
    companyName: "InnoSoft",
    companyLogo: "/placeholder.svg?height=50&width=50",
  },
]

export default function JobsList() {
  const [jobs, setJobs] = useState(initialJobs)
  const [searchTerm, setSearchTerm] = useState("")

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id))
  }

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Job Listings</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Filter className="mr-2 h-5 w-5" />
          Filter Jobs
        </button>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <img
                  src={job.companyLogo || "/placeholder.svg"}
                  alt={job.companyName}
                  className="w-12 h-12 rounded-full"
                />
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    job.type === "Full-time" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {job.type}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{job.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Briefcase className="h-5 w-5 mr-2 text-gray-400" />
                  {job.experience}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <DollarSign className="h-5 w-5 mr-2 text-gray-400" />
                  {job.salaryRange}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-5 w-5 mr-2 text-gray-400" />
                  {job.createdAt.toLocaleDateString()}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-800">
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDeleteJob(job.id)} className="text-red-600 hover:text-red-800">
                    <Trash className="h-5 w-5" />
                  </button>
                </div>
                <a
                  href={job.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Apply <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

