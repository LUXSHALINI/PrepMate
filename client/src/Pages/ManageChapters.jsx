// src/pages/ManageChapters.jsx
import React, { useState } from 'react';

const ManageChapters = () => {
  const [chapters, setChapters] = useState([]);
  const [form, setForm] = useState({ subject: '', chapterName: '', description: '' });

  const addChapter = () => {
    setChapters([...chapters, form]);
    setForm({ subject: '', chapterName: '', description: '' });
  };

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">Manage Chapters</h2>
      <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className="border p-2 mr-2" />
      <input value={form.chapterName} onChange={(e) => setForm({ ...form, chapterName: e.target.value })} placeholder="Chapter Name" className="border p-2 mr-2" />
      <input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description" className="border p-2 mr-2" />
      <button onClick={addChapter} className="bg-blue-600 px-4 py-2 text-white rounded">Add</button>

      <ul className="mt-4">
        {chapters.map((c, i) => (
          <li key={i} className="bg-gray-100 p-2 rounded mt-2">
            <strong>{c.chapterName}</strong> ({c.subject}) - {c.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageChapters;

