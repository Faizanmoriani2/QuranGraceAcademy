import React, { useState, useEffect } from "react";
import quranImg from "../assets/quran.webp"; 
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.webp"; // background image in png format
import bgMobile from "../assets/bg-mobile.jpg";
import logo from "../assets/logo4.png";

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

  return (
    <section
  className="pt-20 mt-0 relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-100 via-teal-100 to-cyan-200"
  style={{
    backgroundImage: `url(${window.innerWidth < 768 ? bgMobile : bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
      {/* Overlay gradient for fading bottom */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white"></div>
      </div>
      {/* Glowing light background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      {/* Logo at the top */}
      <img
    src={logo}
    alt="logo"
    className="
      w-48 mt-10 sm:w-64 md:w-80 lg:w-96 
      object-contain
      drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] 
      sm:drop-shadow-[0_24px_14px_rgba(0,0,0,0.6)] 
      md:drop-shadow-[0_32px_18px_rgba(0,0,0,0.7)] 
      opacity-90
    "
  />

      {/* Content in two columns */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto w-full gap-12">
        
    <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
  className="flex-1 flex justify-center"
>
  <img
    src={quranImg}
    alt="Quran"
    className="
      w-48 sm:w-64 md:w-80 lg:w-96 
      object-contain
      drop-shadow-[0_16px_10px_rgba(0,0,0,0.5)] 
      sm:drop-shadow-[0_24px_14px_rgba(0,0,0,0.6)] 
      md:drop-shadow-[0_32px_18px_rgba(0,0,0,0.7)] 
      opacity-90
    "
  />
</motion.div>

        {/* Right Column - Text */}
        <div className="flex-1 text-center md:text-left">
          {/* Rotating tagline */}
          <div className="h-20 flex items-center justify-center md:justify-start mb-4">
            <p className="text-2xl md:text-3xl font-semibold text-teal-900 transition-all duration-1000">
              {texts[currentText]}
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-10 text-gray-700 max-w-xl leading-relaxed mx-auto md:mx-0">
            Experience personalized Quranic education with certified teachers
            available 24/7. Begin your spiritual journey with our 3-day free trial.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <button
              onClick={() => navigate("/free-trial")}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-teal-400 transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => navigate("/about")}
              className="border-2 border-teal-500 text-teal-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;