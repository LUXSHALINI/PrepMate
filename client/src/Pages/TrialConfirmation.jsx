import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrialConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 font-sans">
      <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-md text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-[#105C5C] mb-2">Welcome to PrepMate!</h2>
        {/* <p className="text-green-600 font-semibold mb-2">✅ Your 15-day free trial has started.</p> */}
        <p className="text-gray-600 text-sm mb-6">📊 Start learning now!</p>

        <button
          onClick={() => navigate('/dashboard')}
          className="bg-teal-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-800 transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default TrialConfirmation;
