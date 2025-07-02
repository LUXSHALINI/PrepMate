

import React, { useEffect, useState } from 'react';
import StudentTable from '../components/StudentTable';
import ManageSubjects from './ManageSubjects';
import ManageChapters from './ManageChapters';
import ManageQuestions from './ManageQuestions';
import PerformancDashboard from './PerformanceDashboard'
import PerformanceMonitoring from '../components/PerformanceMonitoring';



const AdminDashboard = () => {
  const [students, setStudents] = useState([]);


  const fetchStudents = async () => {
    return [
      { name: 'Shalini', email: 'shalini@example.com', school: 'ABC School', progress: 'Medium' },
      { name: 'Kala', email: 'Kala@example.com', school: 'XYZ School', progress: 'Strong' },
      { name: 'Mala', email: 'Mala@example.com', school: 'XYZ School', progress: 'Strong' },
      { name: 'Dushy', email: 'Dushy@example.com', school: 'XYZ School', progress: 'Strong' },
      { name: 'Jalani', email: 'Jalani@example.com', school: 'XYZ School', progress: 'Strong' },
    
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
  
      <section>
        <h1 className="text-2xl font-bold mb-4">👩‍🎓 Student Management</h1>
        <StudentTable students={students} />
      </section>

     
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
