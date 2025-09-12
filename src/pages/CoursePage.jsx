import { BookOpen } from "lucide-react";
import { useState } from "react";
import { Award, Play, Heart, Lightbulb, Book, Languages } from "lucide-react";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";
import { courses, categories } from "../data/courseData";

const CoursePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();



  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 via-cyan-800 to-teal-700 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="mb-10">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center shadow-xl">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Courses</h1>
            <p className="text-lg md:text-xl mb-8 text-cyan-100 max-w-3xl mx-auto">
              Discover Quranic and Islamic courses designed to nurture your
              spiritual growth. Learn from certified teachers with personalized
              attention.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                index={index}
                onLearnMore={() =>
                  navigate(`/courses/${course.id}`, {
                    state: {
                      title: course.title,
                      intro: course.intro,
                      about: course.about,
                      outcomes: course.outcomes,
                      structure: course.structure,
                    },
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg mb-8 text-cyan-100 max-w-2xl mx-auto">
          Join thousands worldwide and experience Quranic education with expert
          teachers and flexible learning options.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/free-trial")}
            className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition cursor-pointer"
          >
            Get 3 Days Free Trial
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition cursor-pointer"
          >
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default CoursePage;
