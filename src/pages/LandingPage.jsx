import { useState } from "react";
import {
  User,
  Upload,
  Briefcase,
  ArrowRight,
  Search,
  MapPin,
  Bookmark,
} from "lucide-react"; 
import Header from "@/components/header";

export default function LandingPage() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Searching for jobs...");
    console.log("Job title:", jobTitle);
    console.log("Location:", location);
  };

  return (
    <div className="min-h-screen">
      <Header activeLink="home" />

      <main>
        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-8">
                <h2 className="text-4xl font-bold mb-4 leading-tight">
                  Find a job that suits
                  <br />
                  your interest & skills.
                </h2>
                <p className="text-gray-600 mb-6">
                  Discover your dream job with our comprehensive job search
                  platform.
                </p>
                <div className="flex flex-col md:flex-row mb-4">
                  <div className="relative flex-grow mb-4 md:mb-0 md:mr-4">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Job title, Keyword..."
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="relative flex-grow mb-4 md:mb-0 md:mr-4">
                    <MapPin
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Your Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    className="flex items-center justify-center h-10 w-full md:w-32 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={handleSearch}
                  >
                    <Search size={18} className="mr-2" /> Find Job
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="/illustration.svg"
                  alt="Hero Illustration"
                  className="h-60 w-full rounded-lg "
                />
              </div>
              
            </div>
          </div>
        </section>

        {/* Most Popular Vacancies Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Most Popular Vacancies
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {/* Sample Vacancies */}
              {[
                {
                  title: "Software Engineer",
                  positions: 120,
                  salary: "$90,000",
                },
                { title: "UI/UX Designer", positions: 80, salary: "$80,000" },
                { title: "Data Analyst", positions: 50, salary: "$75,000" },
                {
                  title: "Marketing Manager",
                  positions: 30,
                  salary: "$85,000",
                },
                {
                  title: "Backend Developer",
                  positions: 40,
                  salary: "$95,000",
                },
                { title: "Product Manager", positions: 25, salary: "$100,000" },
                {
                  title: "Sales Representative",
                  positions: 60,
                  salary: "$70,000",
                },
                { title: "Content Writer", positions: 35, salary: "$65,000" },
                { title: "Project Manager", positions: 45, salary: "$90,000" },
                { title: "QA Engineer", positions: 55, salary: "$80,000" },
                { title: "DevOps Engineer", positions: 65, salary: "$100,000" },
                { title: "Business Analyst", positions: 75, salary: "$85,000" },
              ].map((vacancy, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <Bookmark className="text-blue-600 float-right" />
                  <h3 className="font-semibold">{vacancy.title}</h3>
                  <p className="text-gray-600">
                    Open Positions: {vacancy.positions}
                  </p>
                  <p className="text-gray-600">
                    Estimated Salary: {vacancy.salary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6 text-center">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row md:items-center">
              {/* Step 1 */}
              <div className="bg-transparent p-6 rounded-lg flex items-start transition duration-300 hover:bg-white relative">
                <User size={24} className="text-blue-600 mx-auto mb-2" />
                <div>
                  <h3 className="font-semibold text-lg">Create an Account</h3>
                  <p className="text-gray-600">
                    Sign up for free and create your profile to get started.
                  </p>
                </div>
                <ArrowRight className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Step 2 */}
              <div className="bg-transparent p-6 rounded-lg flex items-start transition duration-300 hover:bg-white relative mt-4 md:mt-0">
                <Upload size={24} className="text-blue-600 mx-auto mb-2" />
                <div>
                  <h3 className="font-semibold text-lg">Upload Your Resume</h3>
                  <p className="text-gray-600">
                    Upload your resume and showcase your skills and experience.
                  </p>
                </div>
                <ArrowRight className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Step 3 */}
              <div className="bg-transparent p-6 rounded-lg flex items-start transition duration-300 hover:bg-white relative mt-4 md:mt-0">
                <Briefcase size={24} className="text-blue-600 mx-auto mb-2" />
                <div>
                  <h3 className="font-semibold text-lg">Find Jobs</h3>
                  <p className="text-gray-600">
                    Browse through thousands of job listings tailored to your
                    skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            {/* Add content for additional sections */}
          </div>
        </section>
      </main>
    </div>
  );
}
