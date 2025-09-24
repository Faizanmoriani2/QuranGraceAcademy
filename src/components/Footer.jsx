import { Facebook, Instagram, Phone, Mail, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/FooterLogo2.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-cyan-100 py-12 p-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Logo + Social Links */}
        <div>
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={logo} 
              alt="Quran Graceful Academy" 
              className="w-40 md:w-48 lg:w-56 object-contain"
            />
          </div>

          {/* Social Links */}
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/profile.php?id=100023338110553&rdid=LXzZqcRG2g9b32uQ" 
              target="_blank" 
              rel="noreferrer"
            >
              <Facebook className="w-6 h-6 hover:text-cyan-400 transition" />
            </a>
            <a 
              href="https://www.instagram.com/quran_graceful_academy?igsh=MTVpN2ZuOHU1OXo2aA==" 
              target="_blank" 
              rel="noreferrer"
            >
              <Instagram className="w-6 h-6 hover:text-cyan-400 transition" />
            </a>
            <a 
              href="https://www.tiktok.com/@quran_graceful_academy?_t=ZT-8w5JUf3PaDm&_r=1" 
              target="_blank" 
              rel="noreferrer"
            >
              <Music2 className="w-6 h-6 hover:text-cyan-400 transition" />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400">Services</Link></li>
            <li><Link to="/courses" className="hover:text-cyan-400">Courses</Link></li>
            <li><Link to="/pricing" className="hover:text-cyan-400">Pricing</Link></li>
            <li><Link to="/free-trial" className="hover:text-cyan-400">Free Trial</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Contact</h3>
          <p className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span>qurangracefulacademy@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <Phone className="w-5 h-5 text-cyan-400" />
            <span>+1 (347) 671-1291</span>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-cyan-300 mt-10 text-sm">
        © {new Date().getFullYear()} Quran Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
