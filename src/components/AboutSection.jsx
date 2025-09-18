import { Users, GraduationCap, Globe, Star } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 pt-30 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-teal-600">Quran Graceful Academy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Empowering Muslim Minds Through Quranic Education
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Quran Graceful Academy is dedicated to spreading the light of
                the Quran with personalized, accessible, and high-quality online
                classes. Our aim is to help learners of all ages develop a strong
                relationship with the Holy Quran.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-6 rounded-xl text-white shadow-md">
                <h4 className="text-xl font-bold mb-3">Our Vision</h4>
                <p className="text-cyan-100">
                  To become the leading global platform for Quranic education and
                  spiritual growth.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-6 rounded-xl text-white shadow-md">
                <h4 className="text-xl font-bold mb-3">Our Mission</h4>
                <p className="text-teal-100">
                  To deliver authentic Quranic knowledge with flexibility,
                  professionalism, and care.
                </p>
              </div>
            </div>
          </div>

          {/* Right side stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-8 rounded-3xl shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center mb-3"
                  >
                    <Users className="w-16 h-16 text-teal-600" />
                  </motion.div>
                  <p className="text-teal-700 font-semibold">1000+ Students</p>
                </div>

                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center mb-3"
                  >
                    <GraduationCap className="w-16 h-16 text-cyan-600" />
                  </motion.div>
                  <p className="text-teal-700 font-semibold">Certified Teachers</p>
                </div>

                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center mb-3"
                  >
                    <Globe className="w-16 h-16 text-teal-600" />
                  </motion.div>
                  <p className="text-teal-700 font-semibold">10+ Countries</p>
                </div>

                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center mb-3"
                  >
                    <Star className="w-16 h-16 text-cyan-600" />
                  </motion.div>
                  <p className="text-teal-700 font-semibold">5-Star Rated</p>
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
