import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        <div>
          <h2 className="text-lg font-bold mb-3">PrepMate</h2>
          <p className="text-sm text-gray-200">
            Smart exam preparation to help students track progress and improve performance.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/features" className="hover:underline">Features</Link></li>
            <li><Link to="/register" className="hover:underline">Register</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: support@prepmate.com</p>
          <p className="text-sm">Phone: +94 71 123 4567</p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} PrepMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
