import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndCheckPrefs = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (!token) {
          navigate('/login');
          return;
        }

        const res = await axios.get('http://localhost:5000/api/app/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(res.data);
        
        // Check if any of the onboarding fields is missing/null
        const {
          studyHours,
          examDate,
          weakestSubject,
          preferredStudyTime,
          targetScore,
          examType,
        } = res.data;

        if (
          !studyHours ||
          !examDate ||
          !weakestSubject ||
          !preferredStudyTime ||
          !targetScore ||
          !examType
        ) {
          // Redirect to onboarding form if incomplete
          navigate('/onboarding');
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        navigate('/login'); // token invalid or backend down
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndCheckPrefs();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null; // or redirect to login

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 relative">
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="text-xl font-bold text-green-700 mb-1">Welcome {user.name || 'User'}!</h2>
          <p className="text-sm text-gray-600">{user.email || 'Not available'}</p>
          <p className="text-sm text-gray-500 mt-1">Bio: Dedicated student preparing for competitive exams</p>
        </div>

        {/* ... */}
      </main>
    </div>
  );
};

export default Dashboard;
