
import React, { useState, useEffect } from 'react';

import StudentCard from '../components/StudentCard';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    
    setStudents([
      { id: 1, name: 'Luxshalini', school: 'XYZ School', level: 'Medium', subjects: ['Maths', 'Science'], active: true },
      { id: 2, name: 'Mala', school: 'ABC College', level: 'Weak', subjects: ['English'], active: false },
    ]);
  }, []);

  const handleToggleStatus = (id) => {
    setStudents(students.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  const handleNotify = (id) => {
    alert(`Reminder sent to student ID: ${id}`);
  };

  return (
    <div>
      <AdminNavbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Student Management</h2>
        {students.map(student => (
          <StudentCard
            key={student.id}
            student={student}
            onToggleStatus={handleToggleStatus}
            onNotify={handleNotify}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
