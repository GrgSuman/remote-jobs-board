import JobPostForm from "@/components/forms/JobPostForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


const companyLogos = [
  {
    name: "AWS",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    name: "Microsoft",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfB_mW4QR3VaGmRaKg8vswW2zx1A0-a-ARA&s",
  },
  {
    name: "IBM",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTi9JJ70--KjzJwSMeqLDzfLEEsvE1vdRLGg&s",
  },
  {
    name: "GitHub",
    src: "https://images.seeklogo.com/logo-png/27/2/github-logo-png_seeklogo-273183.png",
  },
  {
    name: "Mozilla",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fEiDXgDYXmb3hCj_kALZXikozaPuexzgNw&s",
  },
];

export default function page() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto px-4 py-8">
        <Link href="/employer/jobs" className="flex items-center text-gray-600 mb-4 hover:text-gray-900 transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          Back to Job Board
        </Link>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Hire Remote Talent</h1>
            <p className="text-gray-600 mb-8">
              Reach over 3,400,000+ remote workers and find your next team
              member
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">3.4M+</div>
                <div className="text-sm text-gray-600">Monthly Visitors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">150k+</div>
                <div className="text-sm text-gray-600">Remote Workers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-gray-600">
                  Average Time to Hire
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-75">
                {companyLogos.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    className="h-8 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <JobPostForm/>

      </div>
    </div>
  );
}
