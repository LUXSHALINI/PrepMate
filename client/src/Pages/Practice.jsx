import React from 'react';
// import Navbar from '../components/Navbar';

const Practice = () => {
  return (
    <div className="min-h-screen bg-teal-700 text-white font-sans">
      

      {/* Top Section - Subject Practice */}
      <div className="text-center py-10 px-4">
        <h2 className="text-3xl font-bold mb-2">Practice: English</h2>
        <p className="mb-4 text-lg">Sharpen your skills with targeted questions.</p>
        <button className="bg-white text-teal-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-200 transition">
          Change Subject or End Session
        </button>
      </div>

      {/* Bottom Section - Choose Subject */}
      <div className="bg-[#357F75] rounded-lg mx-auto w-11/12 max-w-4xl p-8 mt-6">
        <h3 className="text-2xl font-bold mb-2">Choose Your Subject</h3>
        <p className="text-white mb-6 text-sm">Select a subject to start your practice session.</p>

        {/* Subject Cards */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {['Maths', 'Science', 'English'].map((subject, index) => (
            <div
              key={index}
              className="bg-white text-black w-32 h-24 rounded-xl flex items-center justify-center font-semibold shadow hover:scale-105 transition"
            >
              {subject}
            </div>
          ))}
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            className="bg-gray-300 text-black px-6 py-2 rounded-lg font-semibold cursor-not-allowed"
            disabled
          >
            Start Practice Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
