import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AdminSidebar from '../components/Adminsidebar';

const AdminChapters = () => {
  const [subject, setSubject] = useState('');
  const [chapters, setChapters] = useState([]);
  const [newChapter, setNewChapter] = useState({ chapter: '', questions: [] });
  const [editingChapter, setEditingChapter] = useState(null); // For edit mode
  const fileInputRef = useRef();

  // Fetch chapters when subject changes
  const fetchChapters = async () => {
    if (!subject.trim()) {
      setChapters([]);
      return;
    }
    try {
      const res = await axios.get(`http://localhost:5000/api/chapters/${subject.trim()}`);
      setChapters(res.data);
    } catch (err) {
      console.error('Error fetching chapters:', err);
      alert('Failed to fetch chapters');
    }
  };

  useEffect(() => {
    fetchChapters();
  }, [subject]);

  // Upload JSON file with chapters/questions
  const handleUpload = async () => {
    const selectedFile = fileInputRef.current?.files?.[0]; // ✅ Safely get file
  
    if (!selectedFile || !subject.trim()) {
      alert("Please select a JSON file and enter a subject.");
      return;
    }
  
    const formData = new FormData();
    formData.append('file', selectedFile); // ✅ use selectedFile instead of undefined 'file'
    formData.append('subject', subject);
  
    try {
      const res = await axios.post(
        'http://localhost:5000/api/chapters/upload-json',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('✅ Upload successful!');
      fetchChapters(); // Refresh the chapter list
    } catch (error) {
      console.error('Upload failed:', error);
      alert('❌ Upload failed');
    }
  };
  
  // Create new chapter
  const handleCreate = async () => {
    if (!subject.trim() || !newChapter.chapter.trim()) {
      return alert('Subject and chapter name are required');
    }
    try {
      await axios.post('http://localhost:5000/api/chapters', {
        subject: subject.trim(),
        chapter: newChapter.chapter.trim(),
        questions: newChapter.questions,
      });
      setNewChapter({ chapter: '', questions: [] });
      fetchChapters();
      alert('Chapter created successfully');
    } catch (err) {
      console.error('Creation failed:', err);
      alert('Creation failed');
    }
  };

  // Start editing a chapter
  const startEdit = (chapter) => {
    setEditingChapter({ ...chapter });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingChapter(null);
  };

  // Save updated chapter
  const saveEdit = async () => {
    if (!editingChapter.chapter.trim()) {
      return alert('Chapter name cannot be empty');
    }
    try {
      await axios.put(`http://localhost:5000/api/chapters/${editingChapter._id}`, {
        chapter: editingChapter.chapter.trim(),
        questions: editingChapter.questions || [],
        subject: subject.trim(),
      });
      alert('Chapter updated');
      setEditingChapter(null);
      fetchChapters();
    } catch (err) {
      console.error('Update failed:', err);
      alert('Update failed');
    }
  };

  // Delete chapter
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this chapter?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/chapters/${id}`);
      alert('Chapter deleted');
      fetchChapters();
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Delete failed');
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Manage Chapters</h2>

        {/* Subject Selector */}
        <div className="mb-4 flex gap-4 items-center">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter Subject (e.g. Science)"
            className="border p-2 rounded w-64"
          />
        </div>

        {/* Upload Section */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <h3 className="font-semibold mb-2">📥 Upload Chapters via JSON</h3>
          <input type="file" ref={fileInputRef} accept=".json" />
          <button
            onClick={handleUpload}
            className="ml-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Upload
          </button>
        </div>

        {/* Create or Edit Section */}
        <div className="bg-white p-4 rounded shadow mb-6">
          {editingChapter ? (
            <>
              <h3 className="font-semibold mb-2">✏️ Edit Chapter</h3>
              <input
                type="text"
                value={editingChapter.chapter}
                onChange={(e) =>
                  setEditingChapter((prev) => ({ ...prev, chapter: e.target.value }))
                }
                placeholder="Chapter Name"
                className="border p-2 rounded w-full mb-2"
              />
              {/* Optional: Add UI to edit questions array here */}
              <div className="flex gap-2">
                <button
                  onClick={saveEdit}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="font-semibold mb-2">➕ Create New Chapter</h3>
              <input
                type="text"
                value={newChapter.chapter}
                onChange={(e) =>
                  setNewChapter((prev) => ({ ...prev, chapter: e.target.value }))
                }
                placeholder="Chapter Name"
                className="border p-2 rounded w-full mb-2"
              />
              <button
                onClick={handleCreate}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Create
              </button>
            </>
          )}
        </div>

        {/* Chapter List */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">📚 Chapters for: {subject || '-'}</h3>
          {chapters.length === 0 ? (
            <p className="text-gray-600">No chapters found</p>
          ) : (
            <ul className="space-y-2">
              {chapters.map((ch) => (
                <li
                  key={ch._id}
                  className="flex justify-between items-center border p-3 rounded"
                >
                  <span>{ch.chapter}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(ch)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(ch._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminChapters;
