import AnimatedAvatar from "./AnimatedAvatar";
import { Star, Quote } from 'lucide-react';
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mrs. Sohail",
      location: "Melbourne, Australia",
      rating: 5,
      text: "100% recommended specially for parents struggling to teach kids by themselves this academy is doing such a good job. Their teachers are very dedicated and their teaching method is absolutely amazing. My son and daughter are so excited before their classes every day, their teacher are so qualified and patience with my kids"
    },
    {
      name: "Ms. Yusra",
      location: "Melbourne, Australia",
      rating: 5,
      text: "Thank you guys. Your approach to teaching made learning fun and fostered the love of knowledge. Your students could not have done it without your help, appreciate how my daughter's teacher is always related to the lessons to real life examples that allow the material to make more logical sense. Jazakumullahu khairan."
    },
    {
      name: "Ms. Nahida",
      location: "Los Angeles, US",
      rating: 5,
      text: "I'm in my 50's right now but unfortunately i wouldn't recite the holy Quran a few years back but now by the grace of Allah I can read multiple chapters of the Holy Quran with tajweed, I'm learning for 2 two years in this academy. I'm so impressed by this academy and my teacher as well. I'm thankful for everything"
    },
    {
      name: "Mrs. Souleymane",
      location: "Gatineau, canada",
      rating: 5,
      text: "Salam, i just wanted to say thank you for such an incredible academy. Classes are always engaging and enjoyable. I really appreciate my teacher's patience and tips and tricks to help me remember the lessons. The way she incorporates islamic basic knowledge into our lessons is really valuable and helps me build a deeper understanding."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-teal-900 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <Quote className="w-32 h-32 sm:w-64 sm:h-64 text-cyan-400 absolute top-6 left-6 sm:top-10 sm:left-10 rotate-12" />
        <Quote className="w-32 h-32 sm:w-64 sm:h-64 text-teal-400 absolute bottom-6 right-6 sm:bottom-10 sm:right-10 -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Student Testimonials
          </h2>
          <p className="text-base sm:text-lg text-cyan-200">
            Hear what our students have to say about their journey
          </p>
          <div className="w-20 sm:w-28 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-cyan-300/20 
                         hover:bg-white/20 hover:shadow-lg hover:shadow-cyan-500/20 
                         transition-all duration-300 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Top Section */}
              <div className="flex items-center mb-4 sm:mb-6">
                <AnimatedAvatar name={testimonial.name} size="w-12 h-12 sm:w-16 sm:h-16" />
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-cyan-200 text-xs sm:text-sm">{testimonial.location}</p>
                </div>
                {/* Rating Stars */}
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-cyan-100 text-sm sm:text-base leading-relaxed italic">
                “{testimonial.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
