// src/pages/UserOnboardingForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserOnboardingForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    studyHours: '',
    examDate: '',
    weakestSubject: '',
    preferredStudyTime: '',
    targetScore: '',
    examType: '',
    studyPlan: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = localStorage.getItem('auth_token');

      const response = await axios.post(
        'http://localhost:5000/api/app/preferences',
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem('preferencesFilled', 'true');  // SET FLAG
        navigate('/dashboard');
      } else {
        alert('Failed to submit preferences');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to submit preferences');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Study Preferences</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="number"
          name="studyHours"
          value={form.studyHours}
          onChange={handleChange}
          placeholder="Study hours per day"
          className="border p-2 rounded"
          required
          min={0}
        />
        <input
          type="date"
          name="examDate"
          value={form.examDate}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <select
          name="weakestSubject"
          value={form.weakestSubject}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Weakest Subject</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>
        <select
          name="preferredStudyTime"
          value={form.preferredStudyTime}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Preferred Study Time</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
          <option value="Both">Both</option>
        </select>
        <input
          type="number"
          name="targetScore"
          value={form.targetScore}
          onChange={handleChange}
          placeholder="Target Score"
          className="border p-2 rounded"
          required
          min={0}
          max={100}
        />
        <select
          name="examType"
          value={form.examType}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Exam Type</option>
          <option value="O/L">O/L</option>
          <option value="School Exam">School Exam</option>
        </select>
        <textarea
          name="studyPlan"
          value={form.studyPlan}
          onChange={handleChange}
          placeholder="Describe your study plan"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Preferences'}
        </button>
      </form>
    </div>
  );
};

export default UserOnboardingForm;
