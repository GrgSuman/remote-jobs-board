"use client"

import { useState } from "react"
import { Twitter, Linkedin } from "lucide-react"
import Tiptap from "@/components/forms/TipTap"

const categories = [
  "UI/UX Design",
  "Product Design",
  "UX Research",
  "UI Design",
  "Visual Design",
  "UX Writing",
  "Interaction Design",
]

const salaryRanges = [
  "Under $50,000",
  "$50,000 - $70,000",
  "$70,000 - $90,000",
  "$90,000 - $120,000",
  "$120,000 - $150,000",
  "$150,000+",
]

export default function PostJob() {
  const [formData, setFormData] = useState({
    // Company Details
    companyName: "",
    companyLogo: "",
    companyDescription: "",
    companyTwitter: "",
    companyLinkedin: "",

    // Job Basics
    position: "",
    category: "",
    type: "fullTime",
    salary: "",

    // Job Details
    location: "remote",
    jobDescription: "",
    requirements: "",
    howToApply: "",

    // Highlight Options
    highlightPost: false,
    showLogo: false,
    pinDuration: "", // "24h", "7d", "30d"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission
  }

  const calculateTotal = () => {
    let total = 29 // Base price
    if (formData.highlightPost) total += 9
    if (formData.showLogo) total += 9
    if (formData.pinDuration === "24h") total += 9
    if (formData.pinDuration === "7d") total += 19
    if (formData.pinDuration === "30d") total += 29
    return total
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Hire top designers, UX researchers and UX writers</h1>
            <p className="text-xl text-gray-600">
              Let us help you find the best designers to grow your team. No account or sign-up required to post your
              job.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Job Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Job Details</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="position" className="block font-medium mb-1">
                    Position*
                  </label>
                  <input
                    type="text"
                    id="position"
                    placeholder="e.g. Senior Product Designer"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Please specify a single job position.
                  </p>
                </div>

                <div>
                  <label htmlFor="category" className="block font-medium mb-1">
                    Category*
                  </label>
                  <select
                    id="category"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">Type*</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Full Time", "Part Time", "Contract", "Casual"].map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value={type.toLowerCase().replace(" ", "")}
                          checked={formData.type === type.toLowerCase().replace(" ", "")}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="mr-2"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="salary" className="block font-medium mb-1">
                    Salary (optional)
                  </label>
                  <select
                    id="salary"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  >
                    <option value="">Select salary range</option>
                    {salaryRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">Location*</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location"
                        value="remote"
                        checked={formData.location === "remote"}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="mr-2"
                      />
                      Remote
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location"
                        value="onsite"
                        checked={formData.location === "onsite"}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="mr-2"
                      />
                      On-site
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location"
                        value="hybrid"
                        checked={formData.location === "hybrid"}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="mr-2"
                      />
                      Hybrid
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="jobDescription" className="block font-medium mb-1">
                    Job Description*
                  </label>
                  <ul>
                    <li>as</li>
                    <li>sdas sad</li>
                  </ul>
                  <Tiptap/>
                  {/* <textarea
                    id="jobDescription"
                    rows={6}
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.jobDescription}
                    onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
                    required
                    placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
                  /> */}
                </div>

                <div>
                  <label htmlFor="requirements" className="block font-medium mb-1">
                    Requirements*
                  </label>
                  <textarea
                    id="requirements"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    required
                    placeholder="List the required skills, experience, and qualifications..."
                  />
                </div>

                <div>
                  <label htmlFor="howToApply" className="block font-medium mb-1">
                    How to Apply*
                  </label>
                  <input
                    type="url"
                    id="howToApply"
                    placeholder="e.g. https://mycompany.com/careers/apply"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.howToApply}
                    onChange={(e) => setFormData({ ...formData, howToApply: e.target.value })}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Link to the application page/email address (this email is public).
                  </p>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Company Details</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="companyName" className="block font-medium mb-1">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="companyLogo" className="block font-medium mb-1">
                    Company Logo URL
                  </label>
                  <input
                    type="url"
                    id="companyLogo"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.companyLogo}
                    onChange={(e) => setFormData({ ...formData, companyLogo: e.target.value })}
                    placeholder="https://..."
                  />
                  <p className="text-sm text-gray-500 mt-1">Optional: Link to your company logo</p>
                </div>

                <div>
                  <label htmlFor="companyDescription" className="block font-medium mb-1">
                    Company Description*
                  </label>
                  <textarea
                    id="companyDescription"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.companyDescription}
                    onChange={(e) => setFormData({ ...formData, companyDescription: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companyTwitter" className="block font-medium mb-1">
                      <Twitter className="inline-block w-4 h-4 mr-1" />
                      Twitter Profile
                    </label>
                    <input
                      type="url"
                      id="companyTwitter"
                      className="w-full px-3 py-2 border rounded-md"
                      value={formData.companyTwitter}
                      onChange={(e) => setFormData({ ...formData, companyTwitter: e.target.value })}
                      placeholder="https://twitter.com/..."
                    />
                  </div>
                  <div>
                    <label htmlFor="companyLinkedin" className="block font-medium mb-1">
                      <Linkedin className="inline-block w-4 h-4 mr-1" />
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="companyLinkedin"
                      className="w-full px-3 py-2 border rounded-md"
                      value={formData.companyLinkedin}
                      onChange={(e) => setFormData({ ...formData, companyLinkedin: e.target.value })}
                      placeholder="https://linkedin.com/company/..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight Options */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Highlight</h2>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 mr-3"
                      checked={formData.highlightPost}
                      onChange={(e) => setFormData({ ...formData, highlightPost: e.target.checked })}
                    />
                    <div>
                      <span className="font-medium">Highlight your job post</span>
                      <span className="ml-1 text-gray-600">(+$9)</span>
                    </div>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 mr-3"
                      checked={formData.showLogo}
                      onChange={(e) => setFormData({ ...formData, showLogo: e.target.checked })}
                    />
                    <div>
                      <span className="font-medium">Show the company's logo besides your job post</span>
                      <span className="ml-1 text-gray-600">(+$9)</span>
                    </div>
                  </label>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="pinDuration"
                      value="24h"
                      className="mt-1 mr-3"
                      checked={formData.pinDuration === "24h"}
                      onChange={(e) => setFormData({ ...formData, pinDuration: e.target.value })}
                    />
                    <div>
                      <span className="font-medium">Pin your post to the top of frontpage for 24 hours</span>
                      <span className="ml-1 text-gray-600">(+$9)</span>
                    </div>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="pinDuration"
                      value="7d"
                      className="mt-1 mr-3"
                      checked={formData.pinDuration === "7d"}
                      onChange={(e) => setFormData({ ...formData, pinDuration: e.target.value })}
                    />
                    <div>
                      <span className="font-medium">Pin your post to the top of frontpage for 7 days</span>
                      <span className="ml-1 text-gray-600">(+$19)</span>
                    </div>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="pinDuration"
                      value="30d"
                      className="mt-1 mr-3"
                      checked={formData.pinDuration === "30d"}
                      onChange={(e) => setFormData({ ...formData, pinDuration: e.target.value })}
                    />
                    <div>
                      <span className="font-medium">Pin your post to the top of frontpage for 30 days</span>
                      <span className="ml-1 text-gray-600">(+$29)</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            {/* Removed Payment Details section */}

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-red-500 text-white font-semibold py-4 px-8 rounded-md hover:bg-red-600 transition duration-300 text-lg"
              >
                Post your job — ${calculateTotal()}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

