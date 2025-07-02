import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

       
        <div>
        <h2 className="text-2xl font-extrabold tracking-wide" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>
          <span style={{ color: "#52DAE4" }}>P</span>
          <span style={{ color: "#6AF1ED" }}>rep</span>
          <span style={{ color: "#40BDAF" }}>Mat</span>
          <span style={{ color: "#72C4FF" }}>e</span>
        </h2>
          <p className="text-sm text-white">
          PrepMate helps students achieve academic excellence through personalized learning experiences and powerful study tools.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-white/90">
          <li><Link to="/home" className="hover:underline">Home</Link></li>
            <li><Link to="/features" className="hover:underline">Features</Link></li>
            <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm text-white/90">
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

     
        <div>
  <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
  <div className="flex flex-col gap-1 text-sm">
    <a href="#" className="hover:text-gray-300">123 Education St, Chennai, TN 600001</a>
    <a href="#" className="hover:text-gray-300">+763423371</a>
    <a href="#" className="hover:text-gray-300">prepmate@gmail.com</a>
  </div>
</div>

      </div>

      <p className="text-center text-xs text-white/60 mt-6">© {new Date().getFullYear()} PrepMate. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
