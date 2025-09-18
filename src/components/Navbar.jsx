import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Final.png";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Courses", to: "/courses" },
    { label: "Pricing", to: "/pricing" },
    { label: "Free Trial", to: "/free-trial" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      {/* Background with Islamic curves and patterns */}
      <div className="absolute top-0 left-0 w-full z-50 px-8 pt-8">
        {/* Main navbar container with Islamic design */}
        <div className="relative bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 rounded-3xl shadow-2xl overflow-hidden mx-auto max-w-6xl">
          
          {/* Islamic geometric background patterns */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 100" fill="none">
              {/* Top flowing curves */}
              <path
                d="M0,0 C100,40 200,0 300,20 C400,40 500,0 600,20 C700,40 800,0 900,20 C1000,40 1100,0 1200,20 L1200,0 Z"
                fill="rgba(255,255,255,0.1)"
              />
              {/* Bottom flowing curves */}
              <path
                d="M0,100 C100,60 200,100 300,80 C400,60 500,100 600,80 C700,60 800,100 900,80 C1000,60 1100,100 1200,80 L1200,100 Z"
                fill="rgba(255,255,255,0.08)"
              />
              
              {/* Decorative Islamic patterns */}
              <g opacity="0.15">
                {/* Left side decoration */}
                <path
                  d="M50,20 Q70,10 90,20 Q110,30 130,20 Q150,10 170,20"
                  stroke="rgba(255,215,0,0.6)"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Right side decoration */}
                <path
                  d="M1030,20 Q1050,10 1070,20 Q1090,30 1110,20 Q1130,10 1150,20"
                  stroke="rgba(255,215,0,0.6)"
                  strokeWidth="2"
                  fill="none"
                />
              </g>
            </svg>
            
            {/* Golden accent borders */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
          </div>

          <nav className="relative z-10">
            <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
              {/* Logo */}
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={logo}
                  alt="Quran Grace Academy Logo"
                  className="h-12 w-auto"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex space-x-8">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.to}
                        className={`relative text-white font-medium transition-all duration-300 hover:text-yellow-300 px-3 py-2 rounded-lg hover:bg-white/10 ${
                          isActive ? "text-yellow-300 bg-white/20" : ""
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full shadow-lg"></span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="lg:hidden bg-white/10 backdrop-blur-sm mx-4 mb-4 rounded-2xl border border-white/20">
                <div className="px-6 py-4 space-y-3">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <a
                        key={link.label}
                        href={link.to}
                        className={`block text-white font-medium hover:text-yellow-300 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/20 ${
                          isActive ? "text-yellow-300 bg-white/20" : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                        {isActive && (
                          <span className="inline-block ml-2 w-2 h-2 bg-yellow-400 rounded-full"></span>
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </nav>
        </div>
        
        {/* Subtle shadow beneath navbar */}
        <div className="absolute top-12 left-12 right-12 h-8 bg-gradient-to-b from-black/10 to-transparent rounded-3xl blur-xl -z-10"></div>
      </div>
    </div>
  );
};

export default Navbar;