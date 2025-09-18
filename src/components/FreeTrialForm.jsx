import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Globe, Home, Users, MessageSquare, BookOpen, Clock, Calendar, Send, CheckCircle } from 'lucide-react';

const FreeTrialForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    postalCode: '',
    country: '',
    address: '',
    gender: '',
    relation: '',
    howDidYouKnow: '',
    course: '',
    preferredTime: '',
    weekDays: [],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = [
    'Noorani Qaida Course',
    'Quran with Tajweed Course',
    'Memorization of Quran Course',
    'Islamic Teaching Course',
    'Arabic Language Course',
    'Translation of Quran Course',
    'Tafseer of Quran Course'
  ];

  const timeSlots = [
    '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
    '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM', '12:00 AM'
  ];

  const weekDays = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Pakistan', 
    'India', 'Bangladesh', 'Saudi Arabia', 'UAE', 'Malaysia', 'Indonesia', 
    'Turkey', 'Egypt', 'Germany', 'France', 'Other'
  ];

  const relationOptions = [
    'Self', 'Parent', 'Spouse', 'Sibling', 'Relative', 'Friend', 'Guardian'
  ];

  const howDidYouKnowOptions = [
    'Google Search', 'Social Media', 'Friend/Family Recommendation', 
    'YouTube', 'Facebook', 'Instagram', 'Website', 'Advertisement', 'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWeekDayChange = (day) => {
    setFormData(prev => ({
      ...prev,
      weekDays: prev.weekDays.includes(day)
        ? prev.weekDays.filter(d => d !== day)
        : [...prev.weekDays, day]
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Generate timestamp
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Karachi", // adjust timezone
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const response = await fetch("https://sheetdb.io/api/v1/vr9ocl3ezk29a", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            ...formData,
            weekDays: formData.weekDays.join(","), // convert array
            timestamp, // add timestamp
          },
        ],
      }),
    });

    console.log("Form submitted!", await response.json());
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        postalCode: "",
        country: "",
        address: "",
        gender: "",
        relation: "",
        howDidYouKnow: "",
        course: "",
        preferredTime: "",
        weekDays: [],
        message: "",
      });
    }, 4000);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};



  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-2xl mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Your application has been submitted successfully. Our team will contact you within 24 hours.
          </p>
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-2xl">
            <p className="text-teal-700 font-semibold">
              🎉 Welcome to Quran Grace Academy Family! 🎉
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative mb-16 bg-gradient-to-br from-teal-900 via-cyan-800 to-teal-700 py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative mt-20 z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply Now</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Join our global community of learners. Fill out the form below to begin your Quranic education journey with us.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <User className="w-6 h-6 text-teal-600 mr-3" />
                Personal Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-teal-600 mr-3" />
                Location Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Postal Code */}
                                {/* Postal Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
                    placeholder="12345"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
                    placeholder="Street, City, State"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="w-6 h-6 text-teal-600 mr-3" />
                Additional Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Relation with Applicant */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Relation with Applicant *
                  </label>
                  <select
                    name="relation"
                    value={formData.relation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none bg-gray-50 hover:bg-white"
                  >
                    <option value="">Select Relation</option>
                    {relationOptions.map((rel) => (
                      <option key={rel} value={rel}>
                        {rel}
                      </option>
                    ))}
                  </select>
                </div>

                {/* How Did You Know About Us */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How Did You Know About Us? *
                  </label>
                  <select
                    name="howDidYouKnow"
                    value={formData.howDidYouKnow}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none bg-gray-50 hover:bg-white"
                  >
                    <option value="">Select Option</option>
                    {howDidYouKnowOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Choose Your Course *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none bg-gray-50 hover:bg-white"
                  >
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time Slot *
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none bg-gray-50 hover:bg-white"
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Week Days */}
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Select Week Days *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {weekDays.map((day) => (
                    <label
                      key={day}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.weekDays.includes(day)}
                        onChange={() => handleWeekDayChange(day)}
                        className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <span className="text-gray-700">{day}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 text-teal-600 mr-3" />
                Your Message
              </h2>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none bg-gray-50 hover:bg-white"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialForm;
