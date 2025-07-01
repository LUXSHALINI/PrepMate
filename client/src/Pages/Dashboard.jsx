// src/pages/Dashboard.jsx
import React from 'react';
// import Navbar from '../components/Navbar';
import PerformanceChart from '../components/PerformanceChart';
import QuickActions from '../components/QuickActions';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-teal-700 text-white font-sans">
    
 
    
      {/* <div className="bg-gray-200 text-black rounded-xl mx-6 mt-6 p-4 shadow">
        <p className="text-sm font-medium">
          Trial Period Active – Your free trial ends in <span className="text-red-600 font-bold">14 days</span>.
          <button className="ml-4 bg-white text-teal-700 px-3 py-1 rounded-full font-semibold shadow hover:bg-gray-100">
            View Plans
          </button>
        </p>
      </div>  */}

      {/* Welcome Message */}
      <div className="mt-8 px-6">
        <h2 className="text-xl font-semibold">Welcome Back Luxshalini!</h2>
        <p className="text-sm text-gray-100 mb-4">Ready to ace your studies today?</p>
      </div>

      {/* Learning Journey Card */}
      {/* <div className="bg-white text-black rounded-xl mx-6 p-6 shadow-md">
        <h3 className="text-lg font-bold mb-2">Your Learning Journey</h3>
        <p className="text-sm text-gray-600 mb-4">Track your overall progress and stay motivated.</p>

        <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
          <div className="bg-teal-500 h-4 rounded-full" style={{ width: '65%' }}></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-4 gap-4">
          <div className="bg-gray-100 rounded-lg p-4 text-center w-full md:w-1/2">
            <p className="font-semibold">Target Progress</p>
            <p className="text-teal-700 text-lg font-bold">65%</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-center w-full md:w-1/2">
            <p className="font-semibold">Consistency</p>
            <p className="text-green-600 text-lg font-bold">Good</p>
          </div>
        </div>

        <p className="text-sm text-center mt-6 text-gray-700">
          Keep up the great work! Consistent effort leads to success.
        </p>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100"> */}
  <PerformanceChart />
{/* </div> */}
      <QuickActions />
    </div>
  );
};

export default Dashboard;
