'use client'
import { addCompany, updateCompany } from "@/actions/jobs/companies"
import { Company } from "@prisma/client"
import { X, Globe, Linkedin, Twitter, Building, Users, MapPin, Link } from "lucide-react"
import type React from "react"
import { useActionState } from "react"

export default function CompanyForm({ company, handleCloseForm }: { company: Company | null, handleCloseForm: () => void }) {
  const [addState, addAction, isAddPending] = useActionState(addCompany, null)
  const [updateState, updateAction, isUpdatePending] = useActionState(updateCompany, null)

  // Get the appropriate error state based on whether we're adding or updating
  const getErrorState = (fieldName: string) => {
    if (company) {
      return updateState?.error?.[fieldName]
    }
    return addState?.error?.[fieldName]
  }

  const inputClass =
    "w-full pl-10 pr-4 py-3 text-base border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
  const labelClass = "block mb-1 font-medium text-gray-700"

  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-6 flex items-center justify-center">
        <div className="bg-white w-full max-w-4xl mx-auto rounded-lg shadow-xl">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {company ? "Edit Company" : "Add New Company"}
              </h2>
              <button onClick={handleCloseForm} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
          </div>
          
          <div className="px-6 py-4  overflow-y-auto">
            <form action={company ? updateAction : addAction} className="space-y-4">
              <input type="text" name="id" defaultValue={company?.id || ""} hidden/>
              <div>
                <label htmlFor="name" className={labelClass}>
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={company?.name || ""}
                    placeholder="Enter company name"
                    className={inputClass}
                    required
                  />
                  {getErrorState('name') && (
                    <p className="text-red-500 text-sm mt-1">
                      {getErrorState('name')}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="description" className={labelClass}>
                  Description
                </label>
                <div className="relative">
                  <textarea
                    id="description"
                    name="description"
                    defaultValue={company?.description || ""}
                    rows={3}
                    placeholder="Enter company description"
                    className={`${inputClass} pl-4`}
                    required
                  />
                  {getErrorState('description') && (
                    <p className="text-red-500 text-sm mt-1">
                      {getErrorState('description')}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="logo" className={labelClass}>
                  Company Logo URL ( optional)
                </label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="url"
                    id="logo"
                    name="logo"
                    defaultValue={company?.logo || ""}
                    placeholder="Enter company logo url"
                    className={inputClass}
                  />
                  {getErrorState('logo') && (
                    <p className="text-red-500 text-sm mt-1">
                      {getErrorState('logo')}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="website" className={labelClass}>
                    Website
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="url"
                      id="website"
                      defaultValue={company?.website || ""}
                      required
                      name="website"
                      placeholder="https://example.com"
                      className={inputClass}
                    />
                    {getErrorState('website') && (
                      <p className="text-red-500 text-sm mt-1">
                        {getErrorState('website')}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className={labelClass}>
                    Industry
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      id="industry"
                      required
                      defaultValue={company?.industry || ""}
                      name="industry"
                      placeholder="Enter industry"
                      className={inputClass}
                    />
                    {getErrorState('industry') && (
                      <p className="text-red-500 text-sm mt-1">
                        {getErrorState('industry')}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="linkedinURL" className={labelClass}>
                    LinkedIn URL ( optional)
                  </label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="url"
                      id="linkedinURL"
                      defaultValue={company?.linkedinURL || ""}
                      name="linkedinURL"
                      placeholder="https://linkedin.com/company/..."
                      className={inputClass}
                    />
                    {getErrorState('linkedinURL') && (
                      <p className="text-red-500 text-sm mt-1">
                        {getErrorState('linkedinURL')}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="twitterURL" className={labelClass}>
                    Twitter URL ( optional)
                  </label>
                  <div className="relative">
                    <Twitter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="url"
                      id="twitterURL"
                      defaultValue={company?.twitterURL || ""}
                      name="twitterURL"
                      placeholder="https://twitter.com/..."
                      className={inputClass}
                    />
                    {getErrorState('twitterURL') && (
                      <p className="text-red-500 text-sm mt-1">
                        {getErrorState('twitterURL')}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="size" className={labelClass}>
                    Company Size
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select 
                      id="size" 
                      defaultValue={company?.size || ""}
                      name="size" 
                      className={inputClass}
                      required
                    >
                      <option value="">Select size</option>
                      <option value="1-10 employees">1-10 employees</option>
                      <option value="11-50 employees">11-50 employees</option>
                      <option value="50-200 employees">50-200 employees</option>
                      <option value="201-500 employees">201-500 employees</option>
                      <option value="501-1000 employees">501-1000 employees</option>
                      <option value="1001-5000 employees">1001-5000 employees</option>
                      <option value="5001+ employees">5001+ employees</option>
                    </select>
                    {getErrorState('size') && (
                      <p className="text-red-500 text-sm mt-1">
                        {getErrorState('size')}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="remotePolicy" className={labelClass}>
                    Remote Work Policy
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      id="remotePolicy"
                      name="remotePolicy"
                      className={inputClass}
                      defaultValue={company?.remotePolicy || ""}
                      required
                    >
                      <option value="">Select working policy</option>
                      <option value="Fully Remote">Fully Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On-site">On-site</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                    {getErrorState('remotePolicy') && (
                      <p className="text-red-500 text-sm mt-1">
                        {getErrorState('remotePolicy')}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-3">
                <button
                  onClick={handleCloseForm}
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAddPending || isUpdatePending}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isAddPending || isUpdatePending ? "Submitting..." : (company ? "Update Company" : "Add Company")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}