import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminQuestionPage() {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/questions/');
      setQuestions(res.data);
    } catch (err) {
      console.error('Error fetching questions:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/questions/', {
        questionText,
        options,
        correctAnswer,
      });
      alert('Question added!');
      setQuestionText('');
      setOptions(['', '', '', '']);
      setCorrectAnswer('');
      fetchQuestions(); // refresh list
    } catch (err) {
      console.error('Error creating question:', err);
      alert('Failed to add question');
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-teal-700">Admin – Manage Questions</h1>

      {/* Add Question Form */}
      <form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 rounded shadow">
        <input
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Question"
          className="w-full border p-2 rounded"
          required
        />
        {options.map((opt, i) => (
          <input
            key={i}
            value={opt}
            onChange={(e) => {
              const updated = [...options];
              updated[i] = e.target.value;
              setOptions(updated);
            }}
            placeholder={`Option ${i + 1}`}
            className="w-full border p-2 rounded"
            required
          />
        ))}
        <input
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          placeholder="Correct Answer"
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">
          Add Question
        </button>
      </form>

      {/* Question List */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-2">All Questions</h2>
        <ul className="space-y-2">
          {questions.map((q, index) => (
            <li key={q._id} className="border-b pb-2">
              <strong>{index + 1}. {q.questionText}</strong>
              <ul className="ml-4 list-disc">
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
              <p className="text-green-600 text-sm mt-1">✅ Correct Answer: {q.correctAnswer}</p>
            </li>
          ))}
        </ul>
        {questions.length === 0 && (
          <p className="text-gray-500">No questions found.</p>
        )}
      </div>
    </div>
  );
}
