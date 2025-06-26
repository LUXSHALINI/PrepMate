// src/components/AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-teal-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Admin Panel - PrepMate</h1>
      <div className="space-x-4">
        <Link to="/admin/students" className="hover:underline">Students</Link>
        <Link to="/admin/notifications" className="hover:underline">Notifications</Link>
        <Link to="/" className="hover:underline">Logout</Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
