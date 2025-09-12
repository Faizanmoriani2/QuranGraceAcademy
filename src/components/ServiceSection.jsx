import { Star, BookOpen, Clock, Users, Award, CheckCircle } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalised Classes",
      description:
        "One-on-one Quran lessons tailored to each student's pace and learning style for better understanding.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Qualified Teachers",
      description:
        "Certified Quran tutors with years of teaching experience ensuring quality education and spiritual growth.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Timing 24/7",
      description:
        "Attend your Quran classes anytime, day or night, with our round-the-clock flexible scheduling options.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Choice of Tutor",
      description:
        "Choose a tutor of your preference—male or female—for a comfortable and respectful learning experience.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Teachers Training",
      description:
        "We offer professional development programs for tutors to enhance their teaching skills and methodology.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "3 Days Free Trial",
      description:
        "Experience our teaching style and platform with a no-obligation 3-day free trial before enrolling.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 to-cyan-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our <span className="text-cyan-300">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-cyan-100 mb-6">
            Learn the Quran with modern, flexible, and authentic guidance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-cyan-300/20"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-900 shadow-lg mx-auto">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-cyan-100 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
