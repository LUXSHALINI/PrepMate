
import React, { useState } from 'react';

const ManageSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');

  const addSubject = () => {
    setSubjects([...subjects, newSubject]);
    setNewSubject('');
  };

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">Manage Subjects</h2>
      <input
        value={newSubject}
        onChange={(e) => setNewSubject(e.target.value)}
        className="border p-2 mr-2"
        placeholder="New Subject"
      />
      <button onClick={addSubject} className="bg-green-500 px-4 py-2 text-white rounded">Add</button>
      <ul className="mt-4">
        {subjects.map((s, i) => (
          <li key={i} className="bg-gray-100 p-2 rounded mt-2 flex justify-between">
            {s}
            <button onClick={() => setSubjects(subjects.filter((_, index) => index !== i))} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageSubjects;
