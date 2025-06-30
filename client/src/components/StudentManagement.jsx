import React, { useEffect, useState } from 'react';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch('http://localhost:5000/api/admin/students');
      const data = await res.json();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-10">
      <h2 className="text-xl font-semibold mb-4">👨‍🎓 Student Management</h2>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">School</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i} className="border-b">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.email}</td>
              <td className="p-2">{s.school || '-'}</td>
              <td className="p-2">{s.active ? 'Active' : 'Inactive'}</td>
              <td className="p-2">
                <button className="text-blue-500 text-sm mr-2">Notify</button>
                <button className="text-red-500 text-sm">Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentManagement;
