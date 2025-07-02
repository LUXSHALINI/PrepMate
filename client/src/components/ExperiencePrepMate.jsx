import React from 'react';
import {FaChalkboardTeacher, FaChartPie, FaBell} from 'react-icons/fa';
import experienceImg from '../assets/Home3.jpg'; 

const features = [
  {
    icon: <FaChalkboardTeacher className="text-2xl text-teal-600" />,
    title: 'Interactive Learning Experience',
    description:
      'Our platform adapts to your learning style, providing interactive lessons that keep you engaged and motivated.',
  },
  {
    icon: <FaChartPie className="text-2xl text-teal-600" />,
    title: 'Visual Progress Tracking',
    description:
      'Colorful charts and graphs make it easy to visualize your progress and identify areas for improvement.',
  },
  {
    icon: <FaBell className="text-2xl text-teal-600" />,
    title: 'Smart Reminders',
    description:
      'Never miss a study session with our intelligent reminder system that adapts to your schedule.',
  },
];

const ExperiencePrepMate = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-900 mb-4">
        Experience PrepMate
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Our intuitive interface makes learning efficient and enjoyable
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
        <div className="space-y-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div>{feature.icon}</div>
              <div>
                <h4 className="font-semibold text-teal-800 mb-1">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src={experienceImg}
            alt="Experience PrepMate"
            className="rounded-2xl shadow-xl object-cover w-full h-80 md:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperiencePrepMate;
