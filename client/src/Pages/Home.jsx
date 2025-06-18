import React from 'react';

const Home = () => {
  return (
    <div className="bg-teal-600 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Text */}
        <div>
          <h2 className="text-xl mb-2">Welcome to PrepMate!</h2>
          <h1 className="text-4xl font-bold mb-4">
            Study Smarter, Not Harder<br />with <span className="text-cyan-200">PrepMate</span>
          </h1>
          <p className="text-lg mb-6">
            Personalized exam preparation to help you study smarter and achieve your goals. Join thousands of
            students acing their exams with our AI-powered personalized study plans and resources.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-teal-700 font-semibold px-5 py-2 rounded-full">
              Get Started
            </button>
            <button className="bg-gray-200 text-teal-700 font-semibold px-5 py-2 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section - Image or Placeholder */}
        <div className="bg-white rounded-xl h-64 md:h-80 shadow-lg">
          {/* You can add an <img src={...}/> inside this box later */}
        </div>
      </div>
    </div>
  );
};

export default Home;
