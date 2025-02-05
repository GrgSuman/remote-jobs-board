"use client"

import { useState } from "react"
import { Briefcase, Eye, TrendingUp, DollarSign, ArrowUp, ArrowDown } from "lucide-react"

const initialStats = [
  { name: "Active Jobs", stat: "12", icon: Briefcase, change: "10%", changeType: "increase" },
  { name: "Total Job Views", stat: "24,875", icon: Eye, change: "4.05%", changeType: "increase" },
  { name: "Avg. Time to Hire", stat: "24", unit: "days", icon: TrendingUp, change: "3", changeType: "decrease" },
  { name: "Total Spend", stat: "12,500", unit: "$", icon: DollarSign, change: "2.5%", changeType: "increase" },
]

export default function OverviewStats() {
  const [stats, setStats] = useState(initialStats)

  const handleStatClick = (index: number) => {
    const newStats = [...stats]
    const currentStat = Number(newStats[index].stat.replace(/[^0-9.-]+/g, ""))
    const increase = Math.random() < 0.7 // 70% chance of increase
    const changePercent = (Math.random() * 5 + 1).toFixed(2) // Random change between 1% and 6%

    if (increase) {
      newStats[index].stat = (currentStat * (1 + Number(changePercent) / 100)).toFixed(0)
      newStats[index].change = `${changePercent}%`
      newStats[index].changeType = "increase"
    } else {
      newStats[index].stat = (currentStat * (1 - Number(changePercent) / 100)).toFixed(0)
      newStats[index].change = `${changePercent}%`
      newStats[index].changeType = "decrease"
    }

    setStats(newStats)
  }

  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <div
          key={item.name}
          className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => handleStatClick(index)}
        >
          <dt>
            <div className="absolute rounded-md p-3 bg-indigo-500">
              <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
          </dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              {item.unit && item.unit !== "$" ? item.stat + " " + item.unit : (item.unit || "") + item.stat}
            </p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                item.changeType === "increase" ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.changeType === "increase" ? (
                <ArrowUp className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
              ) : (
                <ArrowDown className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
              )}
              <span className="ml-1">{item.change}</span>
            </p>
            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  View all<span className="sr-only"> {item.name} stats</span>
                </a>
              </div>
            </div>
          </dd>
        </div>
      ))}
    </dl>
  )
}

