import React from "react";
import { useParams, Link } from "react-router-dom";

const courseDetails = {
  tajweed: {
    title: "Tajweed Course",
    intro:
      "Quran recitation is not just reading, it's a sacred art that demands precision and mastery through the rules of Tajweed, enhancing both its beauty and spiritual depth.",
    about:
      "The Tajweed Course is a focused learning program designed to enhance Quran recitation by teaching the principles of Tajweed. Tajweed is the set of rules that ensure each Arabic letter is pronounced correctly and beautifully, preserving the meaning and rhythm of the Quran.",
    outcomes: [
      "Teach correct pronunciation of Arabic letters.",
      "Cover essential and advanced Tajweed rules.",
      "Improve recitation fluency and accuracy.",
      "Support memorization with proper Tajweed.",
      "Emphasize the role of Tajweed in understanding the Quran.",
    ],
    structure: [
      "Tajweed Fundamentals: Importance of Tajweed and its role in beautifying recitation.",
      "Arabic Phonetics: Mastering letter articulation (Makharij) and characteristics (Sifaat).",
      "Basic Rules: Introduction to Madd, Sukoon, and rules of Nun and Meem Mushaddad.",
      "Advanced Concepts: Learning Qalqalah, Ghunna, Idgham, Ikhfa, and Iqlab.",
      "Practical Recitation: Supervised practice with real-time correction.",
      "Memorization Skills: Techniques for retaining verses with correct Tajweed.",
    ],
    whyChoose:
      "Quran Graceful Academy delivers a complete and enriching learning experience, led by expert Tajweed instructors. Our curriculum blends clear theoretical instruction with practical application, making Tajweed mastery both effective and accessible. Flexible class options, audio guides, one-on-one lessons, and interactive tools ensure every student succeeds.",
  },
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseDetails[id];

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
        <h1 className="text-5xl font-bold mb-6">{course.title}</h1>
        <p className="text-lg mb-8 text-cyan-100">{course.intro}</p>

        <h2 className="text-2xl font-semibold mb-4">About the Course</h2>
        <p className="mb-6">{course.about}</p>

        <h2 className="text-2xl font-semibold mb-4">Course Outcomes</h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-cyan-100">
          {course.outcomes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Course Structure</h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-cyan-100">
          {course.structure.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="mb-8">{course.whyChoose}</p>

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
