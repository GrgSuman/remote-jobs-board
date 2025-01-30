'use client'
import React from "react"
import { useState } from "react"
import { Plus, Pencil, Trash2, X } from "lucide-react"

interface Category {
  id: number
  name: string
  description: string
}

export default function JobCategory() {

  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Software Development", description: "Jobs related to software engineering and development" },
    { id: 2, name: "Design", description: "Graphic design, UX/UI, and related fields" },
    { id: 3, name: "Marketing", description: "Digital marketing, content creation, and brand management" },
  ])
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null)
  const [newCategory, setNewCategory] = useState({ name: "", description: "" })
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (isUpdateModalOpen && currentCategory) {
      setCurrentCategory({ ...currentCategory, [name]: value })
    } else {
      setNewCategory({ ...newCategory, [name]: value })
    }
    setError("")
  }

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCategory.name.trim()) {
      setError("Category name is required")
      return
    }
    const newId = categories.length > 0 ? Math.max(...categories.map((c) => c.id)) + 1 : 1
    setCategories([...categories, { ...newCategory, id: newId }])
    setNewCategory({ name: "", description: "" })
    setIsAddModalOpen(false)
  }

  const handleUpdateCategory = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentCategory && currentCategory.name.trim()) {
      setCategories(categories.map((cat) => (cat.id === currentCategory.id ? currentCategory : cat)))
      setIsUpdateModalOpen(false)
      setCurrentCategory(null)
    } else {
      setError("Category name is required")
    }
  }

  const handleDeleteCategory = () => {
    if (currentCategory) {
      setCategories(categories.filter((cat) => cat.id !== currentCategory.id))
      setIsDeleteModalOpen(false)
      setCurrentCategory(null)
    }
  }

  const openUpdateModal = (category: Category) => {
    setCurrentCategory(category)
    setIsUpdateModalOpen(true)
  }

  const openDeleteModal = (category: Category) => {
    setCurrentCategory(category)
    setIsDeleteModalOpen(true)
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Job Categories</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
                <td className="px-6 py-4">{category.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => openUpdateModal(category)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button onClick={() => openDeleteModal(category)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Category Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-[#00000075] bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add New Category</h2>
            <form onSubmit={handleAddCategory}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newCategory.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter category name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newCategory.description}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter category description"
                  rows={3}
                />
              </div>
              {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Category
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Category Modal */}
      {isUpdateModalOpen && currentCategory && (
        <div className="fixed inset-0 bg-[#00000075] bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Update Category</h2>
            <form onSubmit={handleUpdateCategory}>
              <div className="mb-4">
                <label htmlFor="update-name" className="block text-gray-700 text-sm font-bold mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  id="update-name"
                  name="name"
                  value={currentCategory.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="update-description" className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  id="update-description"
                  name="description"
                  value={currentCategory.description}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={3}
                />
              </div>
              {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Update Category
                </button>
                <button
                  type="button"
                  onClick={() => setIsUpdateModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && currentCategory && (
        <div className="fixed inset-0 bg-[#00000075] bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-6">Are you sure you want to delete the category "{currentCategory.name}"?</p>
            <div className="flex items-center justify-between">
              <button
                onClick={handleDeleteCategory}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

