import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureGrid from '../components/FeatureGrid';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-teal-600 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-lg mb-2 uppercase tracking-wide">Welcome to PrepMate!</h2>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Study Smarter, Not Harder<br />
            with <span className="text-cyan-200">PrepMate</span>
          </h1>
          <p className="text-base text-white/90 mb-8">
            Personalized exam preparation to help you study smarter and achieve your goals.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/register')}
              className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Get Started
            </button>
            <button className="bg-gray-100 text-teal-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-white transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl h-64 md:h-80 shadow-xl flex items-center justify-center">
          <span className="text-teal-700 font-bold text-xl">[Image/Animation]</span>
        </div>
      </div>

      {/* Feature Section */}
      <FeatureGrid />

      {/* CTA Section */}
      <div className="text-center mt-16 mb-12">
        <h3 className="text-3xl font-semibold mb-4">Ready to Elevate Your Learning?</h3>
        <p className="mb-6 text-white/90 max-w-xl mx-auto">
          Join thousands of students who are already leveling up their education.
          Your journey to academic excellence starts now.
        </p>
        <button
          onClick={() => navigate('/signup-trial')}
          className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Sign Up For Free Trial
        </button>
      </div>
    </div>
  );
};

export default Home;
