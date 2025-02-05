"use client";
import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useActionState } from "react";
import {
  createCategory,
  updateCategory,
  deleteCategory,
} from "@/actions/jobs/category";
import Spinner from "@/components/Spinner";
interface Category {
  id: string;
  name: string;
  description: string;
  isActive?: boolean;
}

export default function JobCategory({
  categories,
}: {
  categories: Category[];
}) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  const [createState, createAction, createPending] = useActionState(
    createCategory,
    null
  );
  const [updateState, updateAction, updatePending] = useActionState(
    updateCategory,
    null
  );
  const [deleteState, deleteAction, deletePending] = useActionState(
    deleteCategory,
    null
  );

  const openUpdateModal = (category: Category) => {
    setCurrentCategory(category);
    setIsUpdateModalOpen(true);
  };

  const openDeleteModal = (category: Category) => {
    setCurrentCategory(category);
    setIsDeleteModalOpen(true);
  };

  useEffect(() => {
    if (createState?.success) {
      setIsAddModalOpen(false);
    }
    if (updateState?.success) {
      setIsUpdateModalOpen(false);
    }
    if (deleteState?.success) {
      setIsDeleteModalOpen(false);
    }
  }, [createState, updateState, deleteState]);

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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
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
                <td className="px-6 py-4 whitespace-nowrap">
                  {category.isActive ? "Active" : "Inactive"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => openUpdateModal(category)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => openDeleteModal(category)}
                    className="text-red-600 hover:text-red-900"
                  >
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
            <form action={createAction}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter category name"
                />
                {createState?.error?.name && (
                  <p className="text-red-500 text-sm italic mb-4">
                    {createState.error.name}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter category description"
                  rows={3}
                />
                {createState?.error?.description && (
                  <p className="text-red-500 text-sm italic mb-4">
                    {createState.error.description}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 flex items-center gap-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Category {createPending && <Spinner size={18} />}
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
            <form action={updateAction}>
              <div className="mb-4">
                <input type="hidden" name="id" value={currentCategory?.id} />
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={currentCategory.name}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter category name"
                />
                {updateState?.error?.name && (
                  <p className="text-red-500 text-sm italic mb-4">
                    {updateState.error.name}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={currentCategory.description}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter category description"
                  rows={3}
                />
                {updateState?.error?.description && (
                  <p className="text-red-500 text-sm italic mb-4">
                    {updateState.error.description}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="isActive"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Status
                </label>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-black rounded focus:ring-2 focus:ring-black cursor-pointer"
                  defaultChecked={currentCategory.isActive}
                  name="isActive"
                  id="isActive"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 flex items-center gap-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Update Category {updatePending && <Spinner size={18} />}
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
            <p className="mb-6">
              Are you sure you want to delete the category "
              {currentCategory.name}"?
            </p>
            {deleteState?.error && (
              <p className="text-red-500 text-xs italic mb-4">
                {deleteState.error}
              </p>
            )}
            <form action={deleteAction}>
              <input type="hidden" name="id" value={currentCategory?.id} />
              <div className="flex items-center justify-between">
                <button className="bg-red-500 hover:bg-red-700 flex items-center gap-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  {deletePending && <Spinner size={18} />}
                  Delete
                </button>
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
