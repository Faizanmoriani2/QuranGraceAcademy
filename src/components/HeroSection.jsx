import React, { useState, useEffect } from "react";
import logo from "../assets/Final.png";
import { motion } from "framer-motion";
import { Moon, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import lamp from "../assets/lamp.jpg"
import Book from "./Book";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const navigate = useNavigate();
  const texts = [
    "Empowering Muslim Minds",
    "Through Quranic Education",
    "With Grace & Excellence",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Floating animation variants
  const floatAnim = {
    animate: {
      y: [0, -10, 0], // up and down
      rotate: [0, 10, -10, 0], // subtle rotation
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Quran image + overlay */}
      <div className="absolute inset-0">
        <img
          src={lamp}
          alt="Quran background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-cyan-900/30 to-teal-800/70"></div>
      </div>

      {/* Decorative Animated Elements */}
      <motion.div
        variants={floatAnim}
        animate="animate"
        className="absolute top-20 left-10 opacity-30 text-cyan-200"
      >
        <Moon className="w-12 h-12" />
      </motion.div>

      <motion.div
        variants={floatAnim}
        animate="animate"
        className="absolute top-80 left-20 opacity-30 text-cyan-200"
      >
        <Moon className="w-12 h-12" />
      </motion.div>

      <motion.div
        variants={floatAnim}
        animate="animate"
        className="absolute bottom-28 right-16 opacity-20 text-yellow-200"
      >
        <Star className="w-10 h-10" />
      </motion.div>

      <motion.div
        variants={floatAnim}
        animate="animate"
        className="absolute top-1/3 right-1/4 opacity-25 text-yellow-100"
      >
        <Star className="w-8 h-8" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <div className="mt-10 md:mt-0">
       
      </div>
        </div>
      <div className="w-[500px] h-[400px]">
              <Book />
            </div>
        {/* Rotating tagline */}
        <div className="h-20 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-light transition-all duration-1000 transform">
            {texts[currentText]}
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-12 text-cyan-100 max-w-3xl mx-auto leading-relaxed">
          Experience personalized Quranic education with certified teachers
          available 24/7. Begin your spiritual journey with our 3-day free trial.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button onClick={() => navigate('/free-trial')}
          className="bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-300 hover:to-teal-300 transform hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer">
            Start Free Trial
          </button>
          <button onClick={() => navigate('/about')}
           className="border-2 border-cyan-300 text-cyan-100 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-300 hover:text-gray-900 transition-all duration-300 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
