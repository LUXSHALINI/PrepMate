// src/pages/AdminDashboard.jsx

import React, { useEffect, useState } from 'react';
import StudentTable from '../components/StudentTable';
import ManageSubjects from './ManageSubjects';
import ManageChapters from './ManageChapters';
import ManageQuestions from './ManageQuestions';
import PerformancDashboard from './PerformanceDashboard'
import PerformanceMonitoring from '../components/PerformanceMonitoring';

// import { fetchStudents } from '../api/adminApi'; // Uncomment if using

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);

  // Dummy fetchStudents for now (you should replace it with actual API call)
  const fetchStudents = async () => {
    return [
      { name: 'John Doe', email: 'john@example.com', school: 'ABC School', progress: 'Medium' },
      { name: 'Jane Smith', email: 'jane@example.com', school: 'XYZ School', progress: 'Strong' },
    ];
  };

  useEffect(() => {
    const getStudents = async () => {
      const data = await fetchStudents();
      setStudents(data);
    };
    getStudents();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6 space-y-10">
      {/* Student Management Section */}
      <section>
        <h1 className="text-2xl font-bold mb-4">👩‍🎓 Student Management</h1>
        <StudentTable students={students} />
      </section>

      {/* Content Management Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">📚 Content Management</h2>
        <ManageSubjects />
        <ManageChapters />
        <ManageQuestions />
        <PerformanceMonitoring />
       
      </section>
    </div>
  );
};

export default AdminDashboard;
