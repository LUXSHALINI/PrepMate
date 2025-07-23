import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user'); // optional
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-teal-800 rounded-lg shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="PrepMate Logo" className="w-8 h-8 rounded-full" />
        <h1 className="text-2xl font-extrabold tracking-wide" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>
          <span style={{ color: "#52DAE4" }}>P</span>
          <span style={{ color: "#6AF1ED" }}>rep</span>
          <span style={{ color: "#40BDAF" }}>Mat</span>
          <span style={{ color: "#72C4FF" }}>e</span>
        </h1>
      </div>

      {/* Nav Section */}
      <nav className="space-x-3 flex items-center text-sm">
        <Link to="/" className="text-white hover:underline">Home</Link>

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-white text-teal-900 px-4 py-2 rounded hover:bg-red-500 transition"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-white text-teal-900 px-4 py-2 rounded hover:bg-teal-700 transition">
              Sign In
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
