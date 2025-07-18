
import React from "react";

const ProgressBar = ({ subject, score }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="capitalize font-medium text-gray-800">{subject}</span>
        <span className="text-sm text-gray-500">{score}%</span>
      </div>
      <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden">
        <div
          className="h-5 bg-green-500 transition-all duration-500 ease-in-out"
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
