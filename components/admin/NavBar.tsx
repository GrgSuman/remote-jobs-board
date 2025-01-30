import { Bell, Search, Menu } from "lucide-react"

export default function NavBar() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button className="md:hidden mr-2 text-gray-500 hover:text-gray-700">
          <span className="sr-only">Open sidebar</span>
          <Menu className="h-6 w-6" />
        </button>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-[300px]"
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-gray-500 hover:text-gray-700 p-2">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </button>
        <button className="ml-2 p-2">
          <img src="https://plus.unsplash.com/premium_photo-1661928975475-57502a6e34a5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User avatar" className="rounded-full h-8 w-8" />
          <span className="sr-only">User menu</span>
        </button>
      </div>
    </header>
  )
}

