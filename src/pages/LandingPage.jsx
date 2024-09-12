import React, { useState } from "react";
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
  Check,
} from "lucide-react";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

  const topCompanies = [
    { name: "Company A", logo: "/company-a-logo.svg" },
    { name: "Company B", logo: "/company-b-logo.svg" },
    { name: "Company C", logo: "/company-c-logo.svg" },
    { name: "Company D", logo: "/company-d-logo.svg" },
    { name: "Company E", logo: "/company-a-logo.svg" },
    { name: "Company F", logo: "/company-b-logo.svg" },
    { name: "Company G", logo: "/company-c-logo.svg" },
  ];

  const popularVacancies = [
    { title: "Software Engineer", company: "Google", applicants: 1500 },
    { title: "Product Manager", company: "Amazon", applicants: 1200 },
    { title: "Data Scientist", company: "Facebook", applicants: 1000 },
    { title: "UX Designer", company: "Apple", applicants: 800 },
  ];

  const ascendSteps = [
    {
      title: "Create an Account",
      description: "Sign up and complete your profile",
    },
    {
      title: "Browse Jobs",
      description: "Search and filter jobs that match your skills",
    },
    {
      title: "Apply with Ease",
      description: "Submit applications with just a few clicks",
    },
    { title: "Get Hired", description: "Interview and land your dream job" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeLink="home" />
      <main>
        {/* Hero Section with Stats */}
        <section className="bg-gray-50 py-16">
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
                <div className="bg-white p-4 rounded-lg shadow-lg">
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
                    className="w-full flex items-center justify-center py-3 px-4 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={handleSearch}
                  >
                    <Search size={20} className="mr-2" /> Find Job
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[40%]">
                <img
                  src="illustration.svg"
                  alt="Job Search Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-lg shadow-lg">
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

        {/* // Featured Jobs Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Featured Jobs
            </h2>
            <div className="space-y-6">
              {featuredJobs.map((job, index) => (
                <Card
                  key={index}
                  className="bg-gray-100 text-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Briefcase size={24} className="text-gray-700 mr-2" />
                        <CardTitle className="text-lg font-semibold">
                          {job.title}
                        </CardTitle>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-gray-800 border-gray-800"
                      >
                        {job.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      <div className="flex items-center mb-2">
                        <Building size={20} className="text-gray-500 mr-2" />
                        {job.company}
                      </div>
                      <div className="flex items-center mb-2">
                        <MapPin size={20} className="text-gray-500 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center mb-2">
                        <DollarSign size={20} className="text-gray-500 mr-2" />
                        {job.salary}
                      </div>
                      <div className="text-gray-500">{job.timeRemaining}</div>
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Most Popular Vacancies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularVacancies.map((vacancy, index) => (
                <Card
                  key={index}
                  className="bg-gray-100 text-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center">
                      <Briefcase size={24} className="text-gray-700 mr-2" />
                      <CardTitle className="text-lg font-semibold">
                        {vacancy.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      <div className="flex items-center mb-2">
                        <Building size={20} className="text-gray-500 mr-2" />
                        {vacancy.company}
                      </div>
                      <div className="flex items-center mb-2">
                        <Users size={20} className="text-gray-500 mr-2" />
                        {vacancy.applicants} Applicants
                      </div>
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Companies Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Top Companies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {topCompanies.map((company, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="w-32 h-32 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Ascend Steps Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              How Ascend Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ascendSteps.map((step, index) => (
                <Card
                  key={index}
                  className="bg-gray-100 text-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center">
                      <Check size={24} className="text-gray-700 mr-2" />
                      <CardTitle className="text-lg font-semibold">
                        {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                <p className="text-gray-400 mb-4">
                  Stay updated with the latest job postings and career tips.
                </p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-l-md bg-gray-900 focus:border-blue-600 focus:outline-none"
                  />
                  <button className="px-4 py-2 bg-blue-600 border border-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Ascend. All rights reserved.
              </p>
            </div>
          </div>
        </footer> */}
      </main>
    </div>
  );
}
