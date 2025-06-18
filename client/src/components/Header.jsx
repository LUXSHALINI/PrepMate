import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white text-black rounded-lg shadow-md">
    {/* Left side: Logo + App Name */}
    <div className="flex items-center space-x-3">
      <img src="./src/assets/logo.png" alt="PrepMate Logo" className="w-10 h-10 rounded-full" />
      <h1 className="text-2xl font-bold">
        <span style={{ color: "#52DAE4" }}>P</span>
        <span style={{ color: "#6AF1ED" }}>rep</span>
        <span style={{ color: "#2A6B67" }}>Mat</span>
        <span style={{ color: "#103156" }}>e</span>
      </h1>
    </div>

      <nav className="space-x-4">
        <Link to="/login" className="hover:underline">Sign In</Link>
        <Link to="/signup">
          <button className="bg-white text-teal-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
