// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../components/Adminsidebar';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await axios.get('http://localhost:5000/api/app/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('❌ Failed to fetch users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard - User Preferences</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-sm text-left">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Study Hours</th>
                <th className="px-4 py-2">Exam Date</th>
                <th className="px-4 py-2">Weakest Subject</th>
                <th className="px-4 py-2">Preferred Time</th>
                <th className="px-4 py-2">Target Score</th>
                <th className="px-4 py-2">Exam Type</th>
                <th className="px-4 py-2">Study Plan</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="text-sm border-t">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.studyHours || '-'}</td>
                  <td className="px-4 py-2">
                    {user.examDate ? new Date(user.examDate).toLocaleDateString() : '-'}
                  </td>
                  <td className="px-4 py-2">{user.weakestSubject || '-'}</td>
                  <td className="px-4 py-2">{user.preferredStudyTime || '-'}</td>
                  <td className="px-4 py-2">{user.targetScore || '-'}</td>
                  <td className="px-4 py-2">{user.examType || '-'}</td>
                  <td className="px-4 py-2">{user.studyPlan || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
