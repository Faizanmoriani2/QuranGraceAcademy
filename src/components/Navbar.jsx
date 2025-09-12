import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Final.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-opacity-25 bg-gradient-to-r from-gray-900/80 via-teal-900/80 to-gray-900/80 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            alt="Quran Grace Academy Logo"
            className="h-12 w-auto drop-shadow-lg"
          />
          
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block text-white hover:text-cyan-400 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
