type DeleteConfirmationModalProps = {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    companyName: string
  }
  
  export default function DeleteConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    companyName,
  }: DeleteConfirmationModalProps) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Confirm Deletion</h2>
          <p className="mb-6 text-gray-700">
            Are you sure you want to delete the company "{companyName}"? This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              onClick={()=>{
                onConfirm()
                onClose()
              }}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  