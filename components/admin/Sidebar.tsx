import { Briefcase, Users, Settings, Home, PanelsTopLeft } from "lucide-react"
import Link from "next/link"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/jobs/category", label: "Job Category", icon: PanelsTopLeft },
  { href: "/admin/jobs", label: "Jobs", icon: Briefcase },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 flex-shrink-0 hidden md:block">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Jobs Admin</h1>
      </div>
      <nav className="mt-8">
        <ul>
          {navItems.map((item) => (
            <li key={item.href} className="mb-2">
              <Link
                href={item.href}
                className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

