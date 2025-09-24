import { Users, GraduationCap, Globe, Star } from "lucide-react";
import { motion } from "framer-motion";
import image from "../assets/image.png";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 mt-20">
            About <span className="text-teal-600">Quran Graceful Academy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto"></div>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          {/* Left side image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <img
              src={image}
              alt="Quran Graceful Academy"
              className="w-full object-contain max-w-md h-auto  drop-shadow-[0_10px_12px_rgba(0,0,0,0.7)]"
            />
          </div>

          {/* Right side text and stats */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Text content */}
            <div className="space-y-6">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
                  Empowering Muslim Minds Through Quranic Education
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Quran Graceful Academy is dedicated to spreading the light of
                  the Quran with personalized, accessible, and high-quality online
                  classes. Our aim is to help learners of all ages develop a strong
                  relationship with the Holy Quran.
                </p>
              </div>

              {/* Vision & Mission */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-6 rounded-xl text-white shadow-md">
                  <h4 className="text-lg md:text-xl font-bold mb-2">Our Vision</h4>
                  <p className="text-cyan-100 text-sm md:text-base">
                    To become the leading global platform for Quranic education and
                    spiritual growth.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-6 rounded-xl text-white shadow-md">
                  <h4 className="text-lg md:text-xl font-bold mb-2">Our Mission</h4>
                  <p className="text-teal-100 text-sm md:text-base">
                    To deliver authentic Quranic knowledge with flexibility,
                    professionalism, and care.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-6 md:p-8 rounded-3xl shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {/* Students */}
                <div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center mb-2"
                  >
                    <Users className="w-12 h-12 md:w-16 md:h-16 text-teal-600" />
                  </motion.div>
                  <p className="text-teal-700 font-semibold text-sm md:text-base">1000+ Students</p>
                </div>

                {/* Teachers */}
                <div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center mb-2"
                  >
                    <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-cyan-600" />
                  </motion.div>
                  <p className="text-teal-700 font-semibold text-sm md:text-base">Certified Teachers</p>
                </div>

                {/* Countries */}
                <div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center mb-2"
                  >
                    <Globe className="w-12 h-12 md:w-16 md:h-16 text-teal-600" />
                  </motion.div>
                  <p className="text-teal-700 font-semibold text-sm md:text-base">10+ Countries</p>
                </div>

                {/* Rating */}
                <div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center mb-2"
                  >
                    <Star className="w-12 h-12 md:w-16 md:h-16 text-cyan-600" />
                  </motion.div>
                  <p className="text-teal-700 font-semibold text-sm md:text-base">5-Star Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
