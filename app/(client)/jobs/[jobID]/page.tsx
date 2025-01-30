import Link from "next/link"
import { Clock, MapPin, Briefcase, DollarSign, BookmarkPlus, Send } from "lucide-react"

const jobData = {
  id: "994125",
  company: "Foundry for Good",
  title: "UI/UX Product Designer",
  type: "Full Time",
  salary: "$120,000 - $150,000",
  category: "Product Design",
  location: "Remote • Philippines",
  postedAt: "1d ago",
  description: {
    intro: "Be Part of a Mission-Driven Team",
    about:
      "At Foundry for Good, we don't just build businesses—we build businesses that do good. Across our family of brands, we support nonprofits, trade associations, and mission-driven organizations with innovative software, impactful marketing strategies, and tools that empower positive change.",
    highlights: [
      {
        title: "Stability & Growth:",
        description:
          "We're 100% self-funded, with no outside investors or debt, meaning long-term stability and thoughtful growth.",
      },
      {
        title: "People-First Culture:",
        description:
          "Our 95%+ employee retention rate reflects our commitment to competitive pay, respect, and career development.",
      },
      {
        title: "Global Collaboration:",
        description:
          "Work with talented team members in the US and the Philippines who share your drive for excellence and impact.",
      },
      {
        title: "Mission-Focused Work:",
        description: "Every role here supports organizations making the world a better place.",
      },
    ],
    requirements: [
      "We are seeking an experienced UX/UI designer to lead app design projects in Figma for our core application.",
      "We are consistently making changes, improvements, and additions to our nonprofit software.",
      "As our web applications grow, we need to implement strong and dynamic design of our product to ensure our vision is aligned with our developer operations.",
    ],
  },
  categories: [
    { title: "UI UX Designer Jobs", url: "#" },
    { title: "Product Designer Jobs", url: "#" },
    { title: "UX Designer Jobs", url: "#" },
    { title: "UI Designer Jobs", url: "#" },
    { title: "UX Researcher Jobs", url: "#" },
    { title: "UX Writer Jobs", url: "#" },
  ],
  remote: "Remote (Australia)",
  skills: ["React", "TypeScript", "Redux", "Node.js"],
}

export default function JobDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                  <Link href={jobData.company} className="text-gray-600 text-base sm:text-lg mb-2 block">
                    {jobData.company}
                  </Link>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-4">{jobData.title}</h1>
                  <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm sm:text-base text-gray-600 my-2 sm:my-4">
                    <div className="flex items-center">
                      <Briefcase size={14} className="mr-1 text-gray-400 flex-shrink-0" />
                      <span>{jobData.type}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={14} className="mr-1 text-gray-400 flex-shrink-0" />
                      <span>{jobData.salary}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1 text-gray-400 flex-shrink-0" />
                      <span>{jobData.remote}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>Posted {jobData.postedAt}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {jobData.skills.map((skill, index) => (
                      <span key={index} className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-stretch sm:items-center gap-2 w-full sm:w-auto">
                  <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Apply Now
                  </button>
                  <button className="bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300 flex items-center justify-center">
                    <BookmarkPlus className="w-4 h-4 mr-2" />
                    Save Job
                  </button>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">{jobData.description.intro}</h2>
                <p className="mb-6">{jobData.description.about}</p>

                <h3 className="text-lg font-semibold mb-4">Here's why you'll love working with us:</h3>
                <div className="space-y-4 mb-6">
                  {jobData.description.highlights.map((highlight, index) => (
                    <div key={index}>
                      <strong>{highlight.title}</strong> {highlight.description}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {jobData.description.requirements.map((req, index) => (
                    <p key={index}>{req}</p>
                  ))}
                </div>

                <p className="mt-6">
                  If you're ready to grow your career while making a difference, we'd love to hear from you!
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">OTHER DESIGN JOBS</h2>
              <div className="space-y-3">
                {jobData.categories.map((category, index) => (
                  <Link key={index} href={category.url} className="block text-gray-600 hover:text-gray-900">
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

