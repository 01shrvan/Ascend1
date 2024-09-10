import { Phone } from "lucide-react";

export default function Header({ activeLink }) {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center space-x-6">
            <li>
              <a
                href="#"
                className={`text-blue-600 font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:opacity-0 after:transition-opacity hover:after:opacity-100 ${
                  activeLink === "home"
                    ? "after:opacity-100"
                    : "after:opacity-0"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-gray-600 hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:opacity-0 after:transition-opacity hover:after:opacity-100 ${
                  activeLink === "find-job"
                    ? "after:opacity-100"
                    : "after:opacity-0"
                }`}
              >
                Find Job
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-gray-600 hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:opacity-0 after:transition-opacity hover:after:opacity-100 ${
                  activeLink === "employers"
                    ? "after:opacity-100"
                    : "after:opacity-0"
                }`}
              >
                Employers
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-gray-600 hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:opacity-0 after:transition-opacity hover:after:opacity-100 ${
                  activeLink === "candidates"
                    ? "after:opacity-100"
                    : "after:opacity-0"
                }`}
              >
                Candidates
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-gray-600 hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:opacity-0 after:transition-opacity hover:after:opacity-100 ${
                  activeLink === "pricing-plans"
                    ? "after:opacity-100"
                    : "after:opacity-0"
                }`}
              >
                Pricing Plans
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-gray-600 hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:opacity-0 after:transition-opacity hover:after:opacity-100 ${
                  activeLink === "customer-support"
                    ? "after:opacity-100"
                    : "after:opacity-0"
                }`}
              >
                Customer Support
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center text-gray-600">
            <Phone size={18} className="mr-2 text-blue-600" />
            <span className="hidden md:inline">+91 7977788679</span>
          </div>
        </div>
      </div>
    </header>
  );
}
