import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-teal-800 rounded-lg shadow-md">

      {/* Logo + App Name */}
      <div className="flex items-center space-x-3">
        <img src="./src/assets/logo.png" alt="PrepMate Logo" className="w-8 h-8 rounded-full" />
        <h1 className="text-2xl font-extrabold tracking-wide" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>
          <span style={{ color: "#52DAE4" }}>P</span>
          <span style={{ color: "#6AF1ED" }}>rep</span>
          <span style={{ color: "#40BDAF" }}>Mat</span>
          <span style={{ color: "#72C4FF" }}>e</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-x-3 flex items-center text-sm">
        <Link to="/home" className="text-white hover:underline">Home</Link>
        <Link to="/features" className="text-white hover:underline">Features</Link>
        <Link to="/testimonials" className="text-white hover:underline">Testimonials</Link>
        <Link to="/pricing" className="text-white hover:underline">Pricing</Link>
        <Link to="/about" className="text-white hover:underline">About</Link>
        <Link to="/login" className="text-white hover:underline">Sign In</Link>
      </nav>

     
    </header>
  );
};

export default Header;
