// src/pages/ManageQuestions.jsx
import React, { useState } from 'react';

const ManageQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({
    subject: '', chapter: '', questionText: '', correctAnswer: '',
    options: ['', '', '', ''], difficulty: 'medium'
  });

  const addQuestion = () => {
    setQuestions([...questions, form]);
    setForm({ subject: '', chapter: '', questionText: '', correctAnswer: '', options: ['', '', '', ''], difficulty: 'medium' });
  };

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">Manage Questions</h2>
      <input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="border p-2 w-full mb-2" />
      <input placeholder="Chapter" value={form.chapter} onChange={(e) => setForm({ ...form, chapter: e.target.value })} className="border p-2 w-full mb-2" />
      <input placeholder="Question" value={form.questionText} onChange={(e) => setForm({ ...form, questionText: e.target.value })} className="border p-2 w-full mb-2" />
      <input placeholder="Correct Answer" value={form.correctAnswer} onChange={(e) => setForm({ ...form, correctAnswer: e.target.value })} className="border p-2 w-full mb-2" />
      {form.options.map((opt, i) => (
        <input key={i} placeholder={`Option ${i + 1}`} value={opt}
          onChange={(e) => {
            const updated = [...form.options];
            updated[i] = e.target.value;
            setForm({ ...form, options: updated });
          }} className="border p-2 w-full mb-2"
        />
      ))}
      <select value={form.difficulty} onChange={e => setForm({ ...form, difficulty: e.target.value })} className="border p-2 w-full mb-2">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button onClick={addQuestion} className="bg-green-600 px-4 py-2 text-white rounded">Add Question</button>

      <ul className="mt-4">
        {questions.map((q, i) => (
          <li key={i} className="bg-white p-3 mt-2 rounded shadow">
            <strong>{q.questionText}</strong><br />
            <span className="text-sm text-gray-600">Subject: {q.subject}, Chapter: {q.chapter}, Difficulty: {q.difficulty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageQuestions;
