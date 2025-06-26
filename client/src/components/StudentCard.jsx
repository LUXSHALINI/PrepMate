// src/components/StudentCard.jsx
import React from 'react';

const StudentCard = ({ student, onToggleStatus, onNotify }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h3 className="text-xl font-bold">{student.name} ({student.school})</h3>
      <p>Level: <strong>{student.level}</strong></p>
      <p>Subjects: {student.subjects.join(', ')}</p>
      <p>Status: {student.active ? "✅ Active" : "🚫 Inactive"}</p>
      <div className="mt-3 space-x-2">
        <button
          onClick={() => onToggleStatus(student.id)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          {student.active ? "Deactivate" : "Activate"}
        </button>
        <button
          onClick={() => onNotify(student.id)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Notify
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
