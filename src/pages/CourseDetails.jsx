import React from "react";
import { Link, useLocation } from "react-router-dom";

const CourseDetails = () => {
  const location = useLocation();
  const course = location.state;

  if (!course) {
    return (
      <div className="text-center py-20 text-white">
        <h2 className="text-3xl font-bold">Course Not Found</h2>
        <Link to="/courses" className="text-cyan-400 underline mt-4 block">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 to-cyan-900 text-white px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 pt-20">{course.title}</h1>
        <p className="text-lg mb-8 text-cyan-100">{course.intro}</p>

        {/* About */}
        <h2 className="text-2xl font-semibold mb-4">What is the {course.title}?</h2>
        <p className="mb-6">{course.about}</p>

        {/* Outcomes */}
        <h2 className="text-2xl font-semibold mb-4">Course Outcomes</h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-cyan-100">
          {course.outcomes?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Structure */}
        <h2 className="text-2xl font-semibold mb-4">Course Structure</h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-cyan-100">
          {course.structure?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Why Choose */}
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Quran Graceful Academy?
        </h2>
        <p className="mb-8">
          Quran Graceful Academy delivers a complete and enriching learning
          experience, led by expert instructors. Our curriculum blends clear
          theoretical instruction with practical application, making mastery
          both effective and accessible. Flexible class options, audio guides,
          one-on-one lessons, and interactive tools ensure every student
          succeeds.
        </p>

        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:from-cyan-300 hover:to-teal-300 transition"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
};

export default CourseDetails;
