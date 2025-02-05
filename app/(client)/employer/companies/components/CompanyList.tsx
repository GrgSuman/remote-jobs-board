'use client'
import { Company } from "@prisma/client"
import { Edit, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import CompanyForm from "./CompanyForm"
import Link from "next/link"
import DeleteConfirmationModal from "./DeleteConfirmationModel"
import { deleteCompany } from "@/actions/jobs/companies"

export default function CompanyList({companies}: {companies: Company[]}) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteModelOpen, setDeleteModel] = useState(false)
  const [editingCompany, setEditingCompany] = useState<Company | null>(null)

  const handleEditCompany = (company: Company) => {
    setEditingCompany(company)
    setIsFormOpen(true)
  }

  const handleOpenForm = () => {
    setEditingCompany(null)
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  return (
    <>

    {isFormOpen && <CompanyForm company={editingCompany} handleCloseForm={handleCloseForm}/>}

    {isDeleteModelOpen && <DeleteConfirmationModal isOpen={isDeleteModelOpen} onClose={() => setDeleteModel(false)} onConfirm={() => deleteCompany(editingCompany?.id || 0)} companyName={editingCompany?.name || ""}/>}


     <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-900">Companies</h1>
        <button
          onClick={ handleOpenForm}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          <Plus className="mr-2" size={20} />
          Add Company
        </button>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company) => (
        <div key={company.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              {company.logo && (
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                {company.website && (
                  <Link
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    {company.website}
                  </Link>
                )}
              </div>
            </div>
            <p className="text-gray-600 mb-4">{company.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {company.industry && (
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{company.industry}</span>
              )}
              {company.size && (
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{company.size}</span>
              )}
              {company.remotePolicy && (
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{company.remotePolicy}</span>
              )}
            </div>
            <div className="flex justify-end">
              <button onClick={handleEditCompany.bind(null, company)}  className="text-indigo-600 hover:text-indigo-900 mr-4">
                <Edit size={18} />
              </button>
              <button onClick={() => {setDeleteModel(true); setEditingCompany(company)}} className="text-red-600 hover:text-red-900">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

