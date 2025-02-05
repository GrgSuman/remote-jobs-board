import Link from "next/link"
import { Briefcase, Users, TrendingUp, Clock } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard icon={<Briefcase size={24} />} title="Total Jobs" value="42" color="bg-blue-600" />
        <DashboardCard icon={<Users size={24} />} title="Applications" value="156" color="bg-blue-700" />
        <DashboardCard icon={<TrendingUp size={24} />} title="Featured Jobs" value="8" color="bg-indigo-600" />
        <DashboardCard icon={<Clock size={24} />} title="Expired Jobs" value="3" color="bg-indigo-700" />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <ActivityItem title="New job posted" description="Software Engineer" time="2 hours ago" />
          <ActivityItem title="Job boosted" description="Product Manager" time="1 day ago" />
          <ActivityItem title="Applications received" description="5 new for Marketing Specialist" time="3 days ago" />
        </ul>
      </div>

      <div className="text-center">
        <Link
          href="/jobs"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-[10px] font-medium hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          View All Jobs
        </Link>
      </div>
    </div>
  )
}

const DashboardCard = ({ icon, title, value, color }) => (
  <div className={`${color} rounded-[10px] shadow-md p-6 flex items-center text-white`}>
    <div className="rounded-[10px] bg-white bg-opacity-30 p-3 mr-4">{icon}</div>
    <div>
      <h3 className="text-2xl font-semibold">{value}</h3>
      <p className="text-sm opacity-80">{title}</p>
    </div>
  </div>
)

const ActivityItem = ({ title, description, time }) => (
  <li className="flex items-center bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition duration-150 ease-in-out">
    <div className="rounded-[10px] bg-blue-100 text-blue-600 p-2 mr-4">
      <Clock size={16} />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  </li>
)

