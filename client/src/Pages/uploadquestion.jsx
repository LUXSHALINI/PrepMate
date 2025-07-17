// src/pages/UploadQuestions.jsx
import React, { useState, useRef } from 'react';
import axios from 'axios';
import AdminSidebar from '../components/Adminsidebar';

const UploadQuestions = () => {
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
  };

  const handleUpload = async () => {
    if (!file || !subject) {
      setMessage('Please select a file and subject.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('subject', subject);

    try {
      const token = localStorage.getItem('auth_token');
      const res = await axios.post('http://localhost:5000/api/admin/upload-questions', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage('✅File uploaded successfully!');
      setFile(null);
      setSubject('');
      fileInputRef.current.value = '';
    } catch (err) {
      setMessage('❌ Upload failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold mb-4 text-teal-700">📤 Upload Questions JSON</h2>

          <label className="block mb-2 font-medium">
            Subject:
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border px-2 py-1 rounded mt-1"
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
            </select>
          </label>

          <label className="block mb-4 font-medium">
            Select JSON file:
            <input
              type="file"
              accept=".json"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="mt-1"
            />
          </label>

          {message && (
            <p
              className={`mb-4 font-medium ${
                message.includes('successfully') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}

          <button
            onClick={handleUpload}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload
          </button>
        </div>
      </main>
    </div>
  );
};

export default UploadQuestions;
