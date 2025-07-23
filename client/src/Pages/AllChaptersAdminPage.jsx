import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../components/Adminsidebar';

const AllChaptersAdminPage = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingChapter, setEditingChapter] = useState(null); 
  const [updatedChapterName, setUpdatedChapterName] = useState('');

  useEffect(() => {
    fetchChapters();
  }, []);

  const fetchChapters = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/chapters/admin/all');
      setChapters(res.data);
    } catch (err) {
      console.error('Failed to fetch chapters:', err);
      alert('Failed to fetch chapters');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this chapter?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/chapters/${id}`);
      alert('Chapter deleted successfully');
      fetchChapters();
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Delete failed');
    }
  };

  const startEdit = (chapter) => {
    setEditingChapter(chapter);
    setUpdatedChapterName(chapter.chapter);
  };

  const cancelEdit = () => {
    setEditingChapter(null);
    setUpdatedChapterName('');
  };

  const saveEdit = async () => {
    if (!updatedChapterName.trim()) {
      alert('Chapter name cannot be empty');
      return;
    }
    try {
      await axios.put(`http://localhost:5000/api/chapters/${editingChapter._id}`, {
        chapter: updatedChapterName.trim(),
        subject: editingChapter.subject,
        questions: editingChapter.questions,
      });
      alert('Chapter updated successfully');
      setEditingChapter(null);
      setUpdatedChapterName('');
      fetchChapters();
    } catch (err) {
      console.error('Update failed:', err);
      alert('Update failed');
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">📘 All Uploaded Chapters</h1>

        {loading ? (
          <p>Loading...</p>
        ) : chapters.length === 0 ? (
          <p>No chapters found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapters.map((chap) => (
              <div
                key={chap._id}
                className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
              >
                {editingChapter && editingChapter._id === chap._id ? (
                  <>
                    <input
                      type="text"
                      value={updatedChapterName}
                      onChange={(e) => setUpdatedChapterName(e.target.value)}
                      className="border p-2 rounded mb-2"
                    />
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
                    <h2 className="text-lg font-semibold text-purple-700">
                      {chap.subject} — {chap.chapter}
                    </h2>
                    <p className="text-sm text-gray-600">Questions: {chap.questions.length}</p>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => startEdit(chap)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(chap._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllChaptersAdminPage;
