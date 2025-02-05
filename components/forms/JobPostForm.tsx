"use client";

import { useState } from "react";
import { Building2, MapPin, Rocket } from "lucide-react";
import Tiptap from "@/components/forms/TipTap";

// Dummy data for demonstration
const jobTypes = ["Full Time", "Part Time", "Contract", "Freelance"];
const experienceLevels = ["Entry Level", "Mid Level", "Senior", "Lead"];
const dummySkills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "JavaScript",
  "SQL",
  "AWS",
  "Docker",
  "Kubernetes",
];

export default function JobPostForm() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    experience: "",
    location: "",
    salaryRange: "",
    description: "",
    applicationLink: "",
    companyName: "",
    companyWebsite: "",
    companyLogo: "",
    isHighlighted: false,
    showLogo: false,
    pinDuration: "", // "24h", "7d", "30d"
  });

  const handleSkillAdd = () => {
    if (newSkill && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, skills: selectedSkills });
  };

  const calculateTotal = () => {
    let total = 299; // Base price
    if (formData.isHighlighted) total += 99;
    if (formData.showLogo) total += 99;
    if (formData.pinDuration === "24h") total += 99;
    if (formData.pinDuration === "7d") total += 199;
    if (formData.pinDuration === "30d") total += 299;
    return total;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Job Details */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Job Details</h2>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-medium text-gray-700"
            >
              Job Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="e.g. Senior Frontend Developer"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <p className="mt-2 text-sm text-gray-500">
              Be specific — job titles like "Senior React Developer" work better
              than "Developer Needed"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="type"
                className="block mb-2 font-medium text-gray-700"
              >
                Job Type
              </label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Select type</option>
                {jobTypes.map((type) => (
                  <option key={type} value={type.toLowerCase()}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block mb-2 font-medium text-gray-700"
              >
                Experience Level
              </label>
              <select
                id="experience"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Select level</option>
                {experienceLevels.map((level) => (
                  <option key={level} value={level.toLowerCase()}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="location"
                className="block mb-2 font-medium text-gray-700"
              >
                Location
              </label>
              <div className="relative">
                <MapPin
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g. Remote, Worldwide"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="salary"
                className="block mb-2 font-medium text-gray-700"
              >
                Salary Range
              </label>
              <select
                id="salary"
                value={formData.salaryRange}
                onChange={(e) =>
                  setFormData({ ...formData, salaryRange: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Select range</option>
                <option value="$50k - $70k">$50k - $70k</option>
                <option value="$70k - $90k">$70k - $90k</option>
                <option value="$90k - $120k">$90k - $120k</option>
                <option value="$120k - $150k">$120k - $150k</option>
                <option value="$150k+">$150k+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Required Skills
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedSkills.map((skill) => (
                <span
                  key={skill}
                  onClick={() =>
                    setSelectedSkills(selectedSkills.filter((s) => s !== skill))
                  }
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                >
                  {skill} ×
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), handleSkillAdd())
                }
                placeholder="Add a skill"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={handleSkillAdd}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Add
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {dummySkills
                .filter((skill) => !selectedSkills.includes(skill))
                .map((skill) => (
                  <span
                    key={skill}
                    onClick={() =>
                      setSelectedSkills([...selectedSkills, skill])
                    }
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 font-medium text-gray-700"
            >
              Job Description
            </label>
            <Tiptap />
          </div>
        </div>

        {/* Company Details */}
        <div className="space-y-6 pt-8 border-t">
          <h2 className="text-xl font-semibold">Company Details</h2>

          <div>
            <label
              htmlFor="companyName"
              className="block mb-2 font-medium text-gray-700"
            >
              Company Name
            </label>
            <div className="relative">
              <Building2
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                placeholder="Your company name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="companyWebsite"
                className="block mb-2 font-medium text-gray-700"
              >
                Company Website
              </label>
              <input
                type="url"
                id="companyWebsite"
                value={formData.companyWebsite}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    companyWebsite: e.target.value,
                  })
                }
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="companyLogo"
                className="block mb-2 font-medium text-gray-700"
              >
                Company Logo URL
              </label>
              <input
                type="url"
                id="companyLogo"
                value={formData.companyLogo}
                onChange={(e) =>
                  setFormData({ ...formData, companyLogo: e.target.value })
                }
                placeholder="https://example.com/logo.png"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="applicationLink"
              className="block mb-2 font-medium text-gray-700"
            >
              Application URL
            </label>
            <input
              type="url"
              id="applicationLink"
              value={formData.applicationLink}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  applicationLink: e.target.value,
                })
              }
              placeholder="https://example.com/careers/apply"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Feature Post */}
        <div className="space-y-6 pt-8 border-t">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Feature Post</h2>
            <div className="text-sm text-gray-500">
              Starting from <span className="font-semibold">$299</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <label className="relative flex flex-col p-6 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500">
              <input
                type="checkbox"
                checked={formData.isHighlighted}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isHighlighted: e.target.checked,
                  })
                }
                className="absolute top-4 right-4"
              />
              <Rocket className="w-8 h-8 mb-3 text-blue-500" />
              <h3 className="font-semibold mb-1">Highlight Post</h3>
              <p className="text-sm text-gray-600">
                Stand out with a highlighted background
              </p>
              <div className="mt-2 text-blue-600 font-semibold">+$99</div>
            </label>

            <label className="relative flex flex-col p-6 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500">
              <input
                type="checkbox"
                checked={formData.showLogo}
                onChange={(e) =>
                  setFormData({ ...formData, showLogo: e.target.checked })
                }
                className="absolute top-4 right-4"
              />
              <Building2 className="w-8 h-8 mb-3 text-blue-500" />
              <h3 className="font-semibold mb-1">Company Logo</h3>
              <p className="text-sm text-gray-600">Display your company logo</p>
              <div className="mt-2 text-blue-600 font-semibold">+$99</div>
            </label>

            <div className="space-y-4">
              <p className="font-medium text-gray-700">Pin Duration</p>
              {[
                { value: "24h", label: "24 hours", price: 99 },
                { value: "7d", label: "7 days", price: 199 },
                { value: "30d", label: "30 days", price: 299 },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500"
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="pinDuration"
                      value={option.value}
                      checked={formData.pinDuration === option.value}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pinDuration: e.target.value,
                        })
                      }
                      className="mr-3"
                    />
                    <span>{option.label}</span>
                  </div>
                  <span className="text-blue-600 font-semibold">
                    +${option.price}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8">
          <button
            type="submit"
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Post Job — ${calculateTotal()}
          </button>
          <p className="mt-4 text-center text-sm text-gray-500">
            💡 A discount of 10% will be applied at checkout
          </p>
        </div>
      </form>
    </div>
  );
}
