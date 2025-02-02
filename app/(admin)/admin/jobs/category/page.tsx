import { getCategories } from "@/actions/jobs/category"
import JobCategory from "@/components/admin/Category/JobsCategory"

const page = async () => {
  const allCategories = await getCategories()
  return (
    <JobCategory categories={allCategories}/>
  )
}

export default page