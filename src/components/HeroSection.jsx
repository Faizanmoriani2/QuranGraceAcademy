import React, { useState, useEffect } from "react";
import quranImg from "../assets/quran.png"; 
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.webp"; 
import bgMobile from "../assets/bg-mobile2.png";
import logo from "../assets/logo4.png";
import ShinyText from "../animation/ShinyText.jsx";

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
  className="pt-8 md:pt-20 mt-0 relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-100 via-teal-100 to-cyan-200"
  style={{
    backgroundImage: `url(${window.innerWidth < 768 ? bgMobile : bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
      {/* Overlay gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white"></div>
      </div>

      {/* Glowing background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      {/* Desktop Layout */}
      <div className="relative z-10 hidden md:flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto w-full gap-12">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={quranImg}
            alt="Quran"
            className="w-48 sm:w-64 md:w-80 lg:w-96 object-contain drop-shadow-[0_32px_18px_rgba(0,0,0,0.7)] opacity-90"
          />
        </motion.div>

        {/* Right - Text */}
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

      {/* Mobile Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 w-full gap-6 md:hidden">
        {/* Welcome text */}
        <h1 className="font-Alfa text-2xl sm:text-3xl text-teal-700  text-center drop-shadow-2xl mt-10">
          Welcome to <br /> Quran Graceful Academy
        </h1>
        <h1 className="text-5xl text-gray-700 text-center max-w-md font-Imperial">
          <ShinyText 
            text="Recite with us!" 
            disabled={false} 
            speed={3} 
            className='custom-class' 
          />
          
        </h1>

        {/* Quran image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
          <img
            src={quranImg}
            alt="Quran"
            className="w-68 sm:w-64 object-contain drop-shadow-[0_14px_14px_rgba(0,0,0,0.6)] opacity-90"
          />
        </motion.div>

        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            onClick={() => navigate("/free-trial")}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-teal-400 transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
          >
            Start Free Trial
          </button>
          <button
            onClick={() => navigate("/about")}
            className="border-2 border-teal-500 text-teal-700 px-6 py-3 rounded-full font-semibold text-lg hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
