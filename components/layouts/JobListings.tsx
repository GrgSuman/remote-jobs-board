import Link from "next/link";
import Image from "next/image";
import { MapPin, Search, ChevronDown, Clock8, DollarSign } from "lucide-react";

const jobListings = [
  {
    id: 1,
    title: "Senior UX Copywriter",
    company: "Scribd",
    logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "United States, Canada",
    tags: ["Remote", "Writing", "Senior"],
    postedAt: "just now",
  },
  {
    id: 2,
    title: "Online Exams Invigilator",
    company: "PeopleCert",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Greece",
    tags: ["Remote", "All Others", "Mid-level"],
    postedAt: "just now",
  },
  {
    id: 3,
    title: "Senior Growth Analyst",
    company: "Scribd",
    logo: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "United States, Canada",
    salary: "$85k-$145k",
    tags: ["Remote", "Marketing", "Senior"],
    postedAt: "just now",
  },
  {
    id: 4,
    title: "Principal Software Engineer",
    company: "Second Dinner",
    logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "United States",
    salary: "$210k-$270k",
    tags: ["Remote", "Software Development", "Principal"],
    postedAt: "just now",
  },
];


export default function JobListings() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Job Listings */}
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Remote Jobs (47,300)</h2>
        </div>

        <div className="space-y-4">
          {jobListings.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="block bg-white hover:bg-[#7148fa0d] transition-colors rounded-l border border-[#00000017] overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <Image
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    width={40}
                    height={40}
                    className=" block rounded-[5px] h-[80px] w-[80px]"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {job.title}
                          </h3>
                          <p className="text-gray-600">{job.company}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {job.tags.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 py-0.5 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* <div className="flex flex-wrap items-center gap-2 mt-4">
                        {job.tags.map((tag, index) => (
                          <span key={index} className="px-3 text-sm py-1 block bg-[#42df74] rounded-[3px]">
                            {tag}
                          </span>
                        ))}
                      </div> */}
                      </div>

                      <div className="flex flex-col items-end gap-4">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock8 className="w-4 h-4" />
                          <p className="font-medium">{job.postedAt}</p>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <p className="font-medium">{job.location}</p>
                        </div>
                        {job.salary && (
                          <div className="flex items-center gap-2 text-gray-500">
                            <DollarSign className="w-4 h-4" />
                            <p className="font-medium">{job?.salary}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
