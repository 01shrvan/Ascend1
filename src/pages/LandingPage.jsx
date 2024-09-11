import { useState } from "react";
import {
  User,
  Upload,
  Briefcase,
  ArrowRight,
  Search,
  MapPin,
  Bookmark,
  BriefcaseIcon,
  Building,
  Users,
  PlusCircle,
  Code,
  Pencil,
  BarChart2,
  Film,
  Music,
  DollarSign,
  Heart,
  Database,
  Clock,
} from "lucide-react";
import Header from "@/components/Header";

export default function LandingPage() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Searching for jobs...");
    console.log("Job title:", jobTitle);
    console.log("Location:", location);
  };

  const popularCategories = [
    { name: "Graphics & Design", icon: Pencil, openPositions: 357 },
    { name: "Code & Programming", icon: Code, openPositions: 312 },
    { name: "Digital Marketing", icon: BarChart2, openPositions: 297 },
    { name: "Video & Animation", icon: Film, openPositions: 247 },
    { name: "Music & Audio", icon: Music, openPositions: 204 },
    { name: "Account & Finance", icon: DollarSign, openPositions: 167 },
    { name: "Health & Care", icon: Heart, openPositions: 125 },
    { name: "Data & Science", icon: Database, openPositions: 57 },
  ];

  const featuredJobs = [
    {
      title: "Senior UX Designer",
      company: "Upwork",
      location: "Australia",
      salary: "$30K-$35K",
      timeRemaining: "4 Days Remaining",
      type: "Contract Base",
    },
    {
      title: "Software Engineer",
      company: "Apple",
      location: "United States",
      salary: "$80K-$100K",
      timeRemaining: "2 Days Remaining",
      type: "Full Time",
    },
  ];

  // Define topCompanies with example data
  const topCompanies = [
    { name: "Company A", logo: "/company-a-logo.svg" },
    { name: "Company B", logo: "/company-b-logo.svg" },
    { name: "Company C", logo: "/company-c-logo.svg" },
    { name: "Company D", logo: "/company-d-logo.svg" },
    { name: "Company A", logo: "/company-a-logo.svg" },
    { name: "Company B", logo: "/company-b-logo.svg" },
    { name: "Company C", logo: "/company-c-logo.svg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeLink="home" /> {/* Include the Header component */}
      <main>
        {/* Hero Section with Stats */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                  Find a job that suits
                  <br />
                  <span className="text-blue-600">your interest & skills</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Discover your dream job with our comprehensive job search
                  platform. We connect talented individuals with exciting
                  opportunities.
                </p>
                <div className="bg-transparent p-4 rounded-lg shadow-md">
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
                        className="w-full pl-10 pr-4 py-3 border rounded-md focus:border-blue-600 focus:outline-none transition-colors"
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
                        className="w-full pl-10 pr-4 py-3 border rounded-md focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <button
                    className="w-full flex items-center justify-center py-3 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={handleSearch}
                  >
                    <Search size={20} className="mr-2" /> Find Job
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="/illustration.svg?height=400&width=500"
                  alt="Job Search Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-lg shadow-md">
              <div className="text-center">
                <div className="flex justify-center items-center mb-2">
                  <BriefcaseIcon size={24} className="text-blue-600 mr-2" />
                  <h3 className="text-3xl font-bold text-gray-900">175,324</h3>
                </div>
                <p className="text-gray-600">Live Jobs</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mb-2">
                  <Building size={24} className="text-blue-600 mr-2" />
                  <h3 className="text-3xl font-bold text-gray-900">97,354</h3>
                </div>
                <p className="text-gray-600">Companies</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mb-2">
                  <Users size={24} className="text-blue-600 mr-2" />
                  <h3 className="text-3xl font-bold text-gray-900">
                    3,847,154
                  </h3>
                </div>
                <p className="text-gray-600">Candidates</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mb-2">
                  <PlusCircle size={24} className="text-blue-600 mr-2" />
                  <h3 className="text-3xl font-bold text-gray-900">7,532</h3>
                </div>
                <p className="text-gray-600">New Jobs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Popular categories
              </h2>
              <a
                href="/categories"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                View All <ArrowRight className="inline-block ml-1" size={16} />
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularCategories.map((category, index) => (
                <a
                  key={index}
                  href={`/category/${category.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="bg-transparent p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                >
                  <category.icon size={40} className="text-blue-600 mb-4" />
                  <h3 className="font-semibold text-lg text-center text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.openPositions} Open positions
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Jobs
              </h2>
              <a
                href="/jobs"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                View All <ArrowRight className="inline-block ml-1" size={16} />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <Briefcase className="inline-block mr-1" size={16} />
                    {job.company}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <MapPin className="inline-block mr-1" size={16} />
                    {job.location}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <DollarSign className="inline-block mr-1" size={16} />
                    {job.salary}
                  </p>
                  <p className="text-gray-600 mb-2">{job.timeRemaining}</p>
                  <p className="text-gray-600">{job.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Companies Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Top Companies
            </h2>
            <div className="flex flex-wrap gap-6">
              {topCompanies.map((company, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-6 rounded-lg shadow-md flex items-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Candidate / Recruiter Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/4">
                <BriefcaseIcon size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Become a Candidate
                </h3>
                <p className="text-gray-600 mb-4">
                  Join our platform to get access to thousands of job
                  opportunities and connect with top recruiters.
                </p>
                <a
                  href="/register-candidate"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/4">
                <Building size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Become a Recruiter
                </h3>
                <p className="text-gray-600 mb-4">
                  Post your job listings and find the perfect candidates for
                  your organization.
                </p>
                <a
                  href="/register-recruiter"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
