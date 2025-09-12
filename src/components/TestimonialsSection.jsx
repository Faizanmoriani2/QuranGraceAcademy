import AnimatedAvatar from "./AnimatedAvatar";
import { Star, Quote } from 'lucide-react';
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "London, UK",
      rating: 5,
      text: "Excellent teaching methods and very patient teachers. My children love their Quran classes and have improved significantly in their recitation."
    },
    {
      name: "Aisha Rahman",
      location: "Toronto, Canada",
      rating: 5,
      text: "The flexible timing is perfect for our busy schedule. The teachers are knowledgeable and create a wonderful learning environment."
    },
    {
      name: "Omar Abdullah",
      location: "Sydney, Australia",
      rating: 5,
      text: "Amazing academy with qualified teachers. The personalized approach has helped me understand the Quran better than ever before."
    },
    {
      name: "Fatima Al-Zahra",
      location: "Dubai, UAE",
      rating: 5,
      text: "The 3-day free trial convinced me to join. The quality of education and the spiritual growth I've experienced is remarkable."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-teal-900 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <Quote className="w-64 h-64 text-cyan-400 absolute top-10 left-10 rotate-12" />
        <Quote className="w-64 h-64 text-teal-400 absolute bottom-10 right-10 -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Student Testimonials
          </h2>
          <p className="text-lg text-cyan-200">
            Hear what our students have to say about their journey
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-cyan-300/20 
                         hover:bg-white/20 hover:shadow-lg hover:shadow-cyan-500/20 
                         transition-all duration-300 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Top Section */}
              <div className="flex items-center mb-6">
                <AnimatedAvatar name={testimonial.name} size="w-16 h-16" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-cyan-200 text-sm">{testimonial.location}</p>
                </div>
                {/* Rating Stars */}
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-cyan-100 text-base leading-relaxed italic">
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
