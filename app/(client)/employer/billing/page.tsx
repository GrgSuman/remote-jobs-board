"use client"

import { useState } from "react"
import { CreditCard, DollarSign } from "lucide-react"

export default function BillingPage() {
  const [plan, setPlan] = useState("basic")

  const plans = [
    { id: "basic", name: "Basic", price: 9.99, features: ["5 job postings", "Basic analytics", "Email support"] },
    {
      id: "pro",
      name: "Pro",
      price: 29.99,
      features: ["Unlimited job postings", "Advanced analytics", "Priority support"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 99.99,
      features: ["Custom solutions", "Dedicated account manager", "API access"],
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900">Billing</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
        <div className="flex items-center space-x-4 mb-6">
          <DollarSign className="h-8 w-8 text-green-500" />
          <div>
            <p className="font-semibold">{plans.find((p) => p.id === plan)?.name} Plan</p>
            <p className="text-sm text-gray-500">${plans.find((p) => p.id === plan)?.price}/month</p>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">Available Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div key={p.id} className={`border rounded-lg p-4 ${plan === p.id ? "border-blue-500" : ""}`}>
              <h4 className="font-semibold">{p.name}</h4>
              <p className="text-2xl font-bold">
                ${p.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mt-2 space-y-1">
                {p.features.map((feature, index) => (
                  <li key={index} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setPlan(p.id)}
                className={`mt-4 w-full py-2 rounded ${
                  plan === p.id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {plan === p.id ? "Current Plan" : "Select Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <div className="flex items-center space-x-4">
          <CreditCard className="h-8 w-8 text-gray-500" />
          <div>
            <p className="font-semibold">Visa ending in 1234</p>
            <p className="text-sm text-gray-500">Expires 12/2025</p>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Update Payment Method
        </button>
      </div>
    </div>
  )
}

