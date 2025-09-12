import { User, UserRound } from "lucide-react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Laiba Naeem",
      role: "President",
      gender: "female",
      description:
        "Meet Ms. Laiba Naeem, CEO of Quran Graceful Academy, a visionary leader sharing Quranic wisdom globally. Under her guidance, learners enjoy an enriching experience, deepening their understanding of the Quran and Islamic teachings effectively.",
    },
    {
      name: "Moulana Saroosh",
      role: "Teacher",
      gender: "male",
      description:
        "Experienced Quran teacher with expertise in Tajweed and Islamic studies, dedicated to nurturing students' spiritual growth.",
    },
    {
      name: "Fatima",
      role: "Teacher",
      gender: "female",
      description:
        "Passionate educator specializing in Quranic recitation and memorization, committed to excellence in Islamic education.",
    },
    {
      name: "Kulsoom",
      role: "Teacher",
      gender: "female",
      description:
        "Dedicated teacher with years of experience in Quranic studies, focused on personalized learning approaches.",
    },
    {
      name: "Bareera",
      role: "Teacher",
      gender: "female",
      description:
        "Skilled instructor in Quran and Islamic teachings, devoted to creating meaningful learning experiences.",
    },
  ];

  // Animation variants
  const iconVariants = {
    hover: { scale: 1.2, rotate: 5 },
    tap: { scale: 0.9 },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            OUR TEAM
          </h2>
          <p className="text-2xl text-teal-600 mb-6">Meet Our Organizer</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto"></div>
        </div>

        {/* President Section */}
        <div className="mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-10 rounded-3xl shadow-xl max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex justify-center items-center w-32 h-32 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg"
              >
                <UserRound className="w-16 h-16 text-white" />
              </motion.div>

              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-teal-700 mb-2">
                  {teamMembers[0].name}
                </h3>
                <p className="text-xl text-cyan-600 font-semibold mb-4">
                  {teamMembers[0].role}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {teamMembers[0].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(1).map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform text-center"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex flex-shrink-0 justify-center items-center w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 shadow-md"
              >
                {member.gender === "male" ? (
                  <User className="w-12 h-12 text-white" />
                ) : (
                  <UserRound className="w-12 h-12 text-white shrink-0" />
                )}
              </motion.div>

              <h3 className="text-xl font-bold text-teal-700 mb-2">
                {member.name}
              </h3>
              <p className="text-cyan-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
