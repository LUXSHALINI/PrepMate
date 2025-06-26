// src/components/QuickActions.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-teal-700 text-white rounded-xl p-6 shadow-md w-full max-w-xl mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold mb-2">Quick Actions</h2>
      <p className="text-sm text-white/80 mb-6">
        Jump right back into learning or manage your settings.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => navigate('/practice')}
          className="bg-gray-200 text-teal-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-white transition"
        >
          Start Practice
        </button>
        <button
          onClick={() => navigate('/subscription')}
          className="bg-gray-200 text-teal-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-white transition"
        >
          Manage Subscription
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
