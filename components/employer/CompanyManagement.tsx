"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Building2,
  Globe,
  Briefcase,
  Users,
  MapPin,
  Plus,
  Pencil,
  Trash,
  ExternalLink,
  Image,
} from "lucide-react"
import Link from "next/link"

// Updated mock data based on the Company model
const initialCompanies = [
  {
    id: 1,
    name: "TechCorp",
    description: "A leading technology company specializing in AI and machine learning.",
    logo: "/placeholder.svg?height=50&width=50",
    website: "https://techcorp.com",
    industry: "Technology",
    size: "501-1000 employees",
    remotePolicy: "Hybrid",
  },
  {
    id: 2,
    name: "InnoSoft",
    description: "Innovative software solutions for businesses of all sizes.",
    logo: "/placeholder.svg?height=50&width=50",
    website: "https://innosoft.com",
    industry: "Software",
    size: "51-200 employees",
    remotePolicy: "Fully Remote",
  },
]

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1001+ employees",
]

const remotePolicies = ["Fully Remote", "Hybrid", "On-site"]

export default function CompanyManagement() {
  const [companies, setCompanies] = useState(initialCompanies)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingCompany, setEditingCompany] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    logo: "",
    website: "",
    industry: "",
    size: "",
    remotePolicy: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingCompany) {
      setCompanies(companies.map((company) => (company.id === editingCompany ? { ...company, ...formData } : company)))
      setEditingCompany(null)
    } else {
      setCompanies([...companies, { ...formData, id: Date.now() }])
    }
    resetForm()
  }

  const handleEditCompany = (id: number) => {
    const company = companies.find((c) => c.id === id)
    if (company) {
      setFormData(company)
      setEditingCompany(id)
      setIsFormOpen(true)
    }
  }

  const handleDeleteCompany = (id: number) => {
    setCompanies(companies.filter((company) => company.id !== id))
  }

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      logo: "",
      website: "",
      industry: "",
      size: "",
      remotePolicy: "",
    })
    setIsFormOpen(false)
    setEditingCompany(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Company Management</h2>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-5 w-5 mr-2" /> Add Company
          </button>
        </div>

        {isFormOpen && (
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">{editingCompany ? "Edit" : "Add"} Company</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      name="website"
                      id="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                    Industry
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="industry"
                      id="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="e.g. Technology, Healthcare, Finance"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Size
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      name="size"
                      id="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Select size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="remotePolicy" className="block text-sm font-medium text-gray-700 mb-1">
                    Remote Policy
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      name="remotePolicy"
                      id="remotePolicy"
                      value={formData.remotePolicy}
                      onChange={handleInputChange}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Select remote policy</option>
                      {remotePolicies.map((policy) => (
                        <option key={policy} value={policy}>
                          {policy}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1">
                    Logo URL
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Image className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      name="logo"
                      id="logo"
                      value={formData.logo}
                      onChange={handleInputChange}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Describe your company..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {editingCompany ? "Update" : "Add"} Company
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((company) => (
            <div key={company.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{company.name}</h3>
                      <p className="text-gray-600">{company.industry}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => handleEditCompany(company.id)} className="text-blue-600 hover:text-blue-800">
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button onClick={() => handleDeleteCompany(company.id)} className="text-red-600 hover:text-red-800">
                      <Trash className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-2">{company.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{company.size}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{company.remotePolicy}</span>
                  </div>
                </div>
                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

