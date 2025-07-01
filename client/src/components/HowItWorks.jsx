import React from 'react';
import studyImg from '../assets/Home2.jpg'; 

const steps = [
  {
    id: 1,
    title: 'Create Your Profile',
    description:
      'Sign up and tell us about your learning goals, subjects, and preferred study style.',
  },
  {
    id: 2,
    title: 'Get Your Study Plan',
    description:
      'Receive a personalized study plan based on your goals and available study time.',
  },
  {
    id: 3,
    title: 'Track & Improve',
    description:
      'Follow your plan, take practice tests, and watch your performance improve over time.',
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-teal-900 mb-4">
        How PrepMate Works
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Get started in just a few simple steps and transform your study habits.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {steps.map((step) => (
          <div key={step.id}>
            <div className="text-white bg-teal-600 rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold mx-auto mb-4">
              {step.id}
            </div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <img
          src={studyImg}
          alt="Study illustration"
          className="rounded-2xl shadow-xl w-full max-w-3xl h-64 md:h-80 object-cover"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
