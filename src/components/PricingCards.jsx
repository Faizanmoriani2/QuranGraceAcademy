import React, { useState } from 'react';
import { Check, Clock, BookOpen, Calendar, ArrowRight, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const PricingCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
    const navigate = useNavigate();
  const pricingPlans = [
    {
      id: 1,
      title: "2 Days a Week",
      priceUSD: "$30",
      priceGBP: "25£",
      duration: "per month",
      lessons: "8 lessons per month",
      sessionLength: "30 mins LIVE Lessons",
      color: "from-teal-600 to-cyan-600",
      features: [
        "No age limit",
        "Qualified teachers",
        "Flexible scheduling",
        "One-on-one attention"
      ]
    },
    {
      id: 2,
      title: "3 Days a Week",
      priceUSD: "$40",
      priceGBP: "35£",
      duration: "per month",
      lessons: "12 lessons per month",
      sessionLength: "30 mins LIVE Lessons",
      color: "from-cyan-600 to-teal-600",
      features: [
        "No age limit",
        "Qualified teachers",
        "Flexible scheduling",
        "One-on-one attention"
      ]
    },
    {
      id: 3,
      title: "4 Days a Week",
      priceUSD: "$50",
      priceGBP: "45£",
      duration: "per month",
      lessons: "16 lessons per month",
      sessionLength: "30 mins LIVE Lessons",
      color: "from-teal-700 to-cyan-700",
      features: [
        "No age limit",
        "Qualified teachers",
        "Flexible scheduling",
        "One-on-one attention",
        "Priority support"
      ]
    },
    {
      id: 4,
      title: "5 Days a Week",
      priceUSD: "$60",
      priceGBP: "55£",
      duration: "per month",
      lessons: "20 lessons per month",
      sessionLength: "30 mins LIVE Lessons",
      color: "from-cyan-700 to-teal-700",
      features: [
        "No age limit",
        "Qualified teachers",
        "Flexible scheduling",
        "One-on-one attention",
        "Priority support"
      ]
    },
    {
      id: 5,
      title: "Weekend Plans",
      priceUSD: "$35",
      priceGBP: "30£",
      duration: "per month",
      lessons: "8 lessons per month",
      sessionLength: "30 mins LIVE Lessons",
      color: "from-teal-500 to-cyan-500",
      features: [
        "No age limit",
        "Weekend scheduling",
        "Qualified teachers",
        "One-on-one attention"
      ]
    }
  ];

  const PricingCard = ({ plan }) => {
    const isHovered = hoveredCard === plan.id;
    return (
      <div
        className={`relative overflow-hidden rounded-3xl shadow-xl 
          transform transition-all duration-700 ease-out
          ${isHovered ? 'scale-105 -translate-y-2 shadow-2xl' : 'hover:scale-105 hover:-translate-y-2'}
        `}
        onMouseEnter={() => setHoveredCard(plan.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${plan.color}`}></div>
        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 p-8 text-gray-50 h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-8">
            
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-200/50 bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
              {plan.title.includes('Weekend') ? (
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    whileTap={{ scale: 0.9 }}
                    
                  >
                  <Calendar className="w-8 h-8 text-white" />
                </motion.div>
              ) : (
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    whileTap={{ scale: 0.9 }}
                    >
                <BookOpen className="w-8 h-8 text-white" />
                </motion.div>
              )}
            </div>
            
            <h3 className="text-2xl font-bold mb-2 drop-shadow">{plan.title}</h3>
            <div className="flex items-center justify-center space-x-2 text-gray-100">
              <Clock className="w-4 h-4 text-white" />
              <span className="text-sm">{plan.sessionLength}</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="text-4xl font-bold drop-shadow">{plan.priceUSD}</span>
              <span className="text-2xl font-semibold text-gray-200">/ {plan.priceGBP}</span>
            </div>
            <p className="text-gray-200">{plan.duration}</p>
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-cyan-200/50 bg-opacity-30 backdrop-blur-sm rounded-full">
              <Zap className="w-4 h-4 mr-2 text-white" />
              <span className="font-semibold">{plan.lessons}</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex-grow">
            <ul className="space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-cyan-200/50 bg-opacity-30 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-100">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button
                onClick={() => navigate('/free-trial')}
              className={`w-full bg-white text-gray-900 py-4 rounded-2xl font-bold text-lg cursor-pointer
              flex items-center justify-center group 
              transition-all duration-500 ease-in-out transform
              ${isHovered ? 'scale-105' : ''}
            `}
            >
              <span>Try Now</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
            <Star className="w-10 h-10 text-white fill-current" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Choose Your <span className="text-teal-600">Learning Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing plans designed to fit your schedule and budget. 
            All plans include live one-on-one sessions with qualified teachers.
          </p>
          <div className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full text-teal-700 font-semibold">
            <Zap className="w-5 h-5 mr-2" />
            3 Days Free Trial Available
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
      <div className="text-center mt-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Our education consultants are here to help you choose the perfect plan 
              based on your learning goals and schedule preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <button 
                onClick={() => navigate('/contact')}
              className="border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
          </div>
    </section>

    
  );
};

export default PricingCards;
