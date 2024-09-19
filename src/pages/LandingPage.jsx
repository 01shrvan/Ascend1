import React, { useState } from "react";
import {
  Briefcase,
  Search,
  MapPin,
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
  Check,
} from "lucide-react";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    {
      title: "Product Manager",
      company: "Google",
      location: "Remote",
      salary: "$90K-$120K",
      timeRemaining: "1 Week Remaining",
      type: "Full Time",
    },
    {
      title: "Data Scientist",
      company: "Amazon",
      location: "Germany",
      salary: "$70K-$90K",
      timeRemaining: "3 Days Remaining",
      type: "Full Time",
    },
  ];

  const topCompanies = [
    {
      name: "Company A",
      logo: "/companies/atlassian.svg",
      bgColor: "bg-gray-100",
    },
    {
      name: "Company B",
      logo: "/companies/google.webp",
      bgColor: "bg-gray-100",
    },
    { name: "Company C", logo: "/companies/meta.svg", bgColor: "bg-gray-100" },
    {
      name: "Company D",
      logo: "/companies/microsoft.webp",
      bgColor: "bg-gray-100",
    },
    {
      name: "Company E",
      logo: "/companies/netflix.png",
      bgColor: "bg-gray-100",
    },
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header activeLink="home" />
      <main className="flex-grow">
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
                  <a href="/jobs">
                    <button
                      className="w-full flex items-center justify-center py-3 px-4 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      onClick={handleSearch}
                    >
                      <Search size={20} className="mr-2" /> Find Job
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-[40%]">
                <img
                  src="illustration.svg"
                  alt="Job Search Illustration"
                  className="w-full h-auto max-w-md mx-auto"
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

        {/* Featured Jobs Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Featured Jobs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredJobs.map((job, index) => (
                <a
                  href={`/jobs/${job.title.toLowerCase().replace(/ /g, "-")}`}
                  key={index}
                  className="block"
                >
                  <Card className="bg-gray-100 text-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Briefcase size={24} className="text-gray-700 mr-2" />
                          <CardTitle className="text-lg font-semibold">
                            {job.title}
                          </CardTitle>
                        </div>
                        <Badge>{job.type}</Badge>
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
                          <DollarSign
                            size={20}
                            className="text-gray-500 mr-2"
                          />
                          {job.salary}
                        </div>
                        <div className="text-gray-500">{job.timeRemaining}</div>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="/jobs">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold">
                  View All Jobs
                </button>
              </a>
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
                <a
                  href={`/jobs?category=${vacancy.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  key={index}
                >
                  <Card className="bg-gray-100 text-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
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
                </a>
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
                <a
                  href={`/companies/${company.name
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  key={index}
                >
                  <div
                    className={`flex justify-center items-center cursor-pointer p-4 ${company.bgColor} rounded-lg shadow-md hover:shadow-lg transition-shadow h-full`}
                    style={{ height: "80px" }}
                  >
                    <img
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      className="w-32 h-auto object-contain"
                    />
                  </div>
                </a>
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
      </main>

      {/* Improved Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Ascend. All rights reserved.</p>
          <p className="mt-2">Developed by Team Astra</p>
        </div>
      </footer>
    </div>
  );
}
