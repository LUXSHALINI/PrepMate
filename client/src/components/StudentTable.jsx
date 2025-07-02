import React from 'react';

const StudentTable = ({ students }) => {
  const handleToggleStatus = (id) => {
    alert(`Toggle status for student ID: ${id}`);
   
  };

  const handleNotify = (id) => {
    alert(`Send notification to student ID: ${id}`);
    // TODO: Send notification to backend
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg shadow">
        <thead>
          <tr className="bg-teal-600 text-white text-left">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">School</th>
            <th className="py-2 px-4">Progress</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="border-b">
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.email}</td>
              <td className="py-2 px-4">{student.school || '-'}</td>
              <td className="py-2 px-4">{student.progress || 'Not Available'}</td>
              <td className="py-2 px-4 flex gap-2">
                <button
                  onClick={() => handleToggleStatus(student._id)}
                  className="bg-yellow-400 px-2 py-1 rounded"
                >
                  {student.isActive ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => handleNotify(student._id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Notify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
