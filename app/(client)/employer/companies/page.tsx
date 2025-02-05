import { Plus } from "lucide-react"
import CompanyList from "./components/CompanyList"
import CompanyForm from "./components/CompanyForm"
import DeleteConfirmationModal from "./components/DeleteConfirmationModel"
import { auth } from "@/auth"
import { getAllCompaniesByUserId } from "@/actions/jobs/companies"
import { Company } from "@prisma/client"

export default async function CompaniesPage() {
  // const [companies, setCompanies] = useState<Company[]>([])
  // const [isFormOpen, setIsFormOpen] = useState(false)
  // const [editingCompany, setEditingCompany] = useState<Company | null>(null)
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  // const [companyToDelete, setCompanyToDelete] = useState<Company | null>(null)

  // const handleAddCompany = (newCompany: Omit<Company, "id">) => {
  //   // Implement API call to add company
  //   const addedCompany = { ...newCompany, id: Date.now() }
  //   setCompanies([...companies, addedCompany])
  //   setIsFormOpen(false)
  // }

  // const handleUpdateCompany = (updatedCompany: Company) => {
  //   // Implement API call to update company
  //   setCompanies(companies.map((company) => (company.id === updatedCompany.id ? updatedCompany : company)))
  //   setEditingCompany(null)
  // }

  // const handleDeleteCompany = () => {
  //   if (companyToDelete) {
  //     // Implement API call to delete company
  //     setCompanies(companies.filter((company) => company.id !== companyToDelete.id))
  //     setIsDeleteModalOpen(false)
  //     setCompanyToDelete(null)
  //   }
  // }

  const session = await auth()
  const userId = session?.user?.id  || ""

  const companies: Company[] = await getAllCompaniesByUserId(userId)

  return (
    <>
      <CompanyList companies={companies} />
    </>
  )
}

