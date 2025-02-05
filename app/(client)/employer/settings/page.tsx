"use client"

import { useState } from "react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
    language: "en",
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">User Preferences</h2>
        <form className="space-y-4">
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
                className="mr-2"
              />
              Receive email notifications
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
                className="mr-2"
              />
              Dark Mode
            </label>
          </div>
          <div>
            <label className="block mb-2">Language</label>
            <select
              name="language"
              value={settings.language}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save Settings
          </button>
        </form>
      </div>
    </div>
  )
}

