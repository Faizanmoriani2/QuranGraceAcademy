import React, { useState } from 'react';
import { Star, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, index, onLearnMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  const gradients = [
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-teal-500',
    'from-teal-400 to-cyan-400',
    'from-cyan-400 to-teal-400',
    'from-teal-600 to-cyan-600',
    'from-cyan-600 to-teal-600',
    'from-teal-500 to-cyan-400'
  ];

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 
        ${isHovered ? 'scale-105 shadow-2xl -translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-95`} />

      {/* Light Glass Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 p-7 text-white">
        {/* Top Section */}
        <div className="flex items-center justify-between mb-5">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-md">
            {course.icon}
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
            ))}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold mb-3 drop-shadow-md">{course.title}</h3>
        <p className="text-white/90 leading-relaxed text-sm mb-6">
          {course.description}
        </p>

        {/* Info Section */}
        <div className="space-y-3 mb-6 text-white/90">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span className="text-sm">{course.students || 'Flexible'} Students</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span className="text-sm">{course.level}</span>
          </div>
        </div>

        {/* Action */}
<div className="flex items-center justify-between">
  <button
    onClick={() => onLearnMore(course)} // ✅ call passed prop
    className="bg-white text-teal-700 px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 flex items-center space-x-2 group transition cursor-pointer"
  >
    <span>Learn More</span>
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </button>
</div>
      </div>
    </div>
  );
};

export default CourseCard;
