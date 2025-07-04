import { useState } from 'react';
import { createQuestion } from '../Services/questionService';
import { useNavigate } from 'react-router-dom';


export default function AddQuestionModal({ onClose, onSuccess }) {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const navigate = useNavigate();

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createQuestion({ questionText, options, correctAnswer });
  
      // Optional success callback
      if (onSuccess) onSuccess();
  
      // Navigate to admin question management page
      navigate('/admin/questions'); 
  
    } catch (err) {
      console.error('Error creating question:', err.message);
      alert('Something went wrong while saving.');
    }
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded w-96 shadow space-y-3">
        <h2 className="text-xl font-bold text-teal-700">Add New Question</h2>
        <input value={questionText} onChange={(e) => setQuestionText(e.target.value)} placeholder="Question" className="w-full border p-2 rounded" required />
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
        />
        <div className="flex justify-between">
          <button type="button" onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
          <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">Save</button>
        </div>
      </form>
    </div>
  );
}
