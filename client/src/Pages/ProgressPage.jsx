import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const ProgressPage = () => {
  const [report, setReport] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("auth_token");
      // console.log("📤 Token in fetchProgress:", token);
  
      const res = await fetch("http://localhost:5000/api/progress", {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ this format is critical
        },
      });
  
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to fetch progress");
      }
  
      const data = await res.json();
      setReport(data.progressReport || []);
    };
  
    fetchProgress();
  }, []);
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            📊 My Exam Progress
          </h2>

          {report.length === 0 ? (
            <p className="text-center text-gray-600">No progress found.</p>
          ) : (
            report.map((subjectData, idx) => (
              <div key={idx} className="mb-10 border-b pb-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-2">{subjectData.subject}</h3>
                <p className="text-sm text-gray-700 mb-1">
                  Avg Score: <strong>{subjectData.averageScore}%</strong> | Attempts: {subjectData.totalAttempts}
                </p>
                <p className="text-green-700">{subjectData.appreciation}</p>
                <p className="text-blue-700">{subjectData.nextStep}</p>
                <p className="text-gray-800 mt-2">📘 Suggestions: {subjectData.suggestions}</p>

                <div className="mt-4 space-y-3">
                  {subjectData.chapters.map((chapter, i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded border">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{chapter.chapter}</p>
                          <p className="text-sm text-gray-600">
                            Attempts: {chapter.attempts} | Latest Score: {chapter.lastScore}
                          </p>
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            chapter.improvement ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {chapter.message}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}

          <div className="text-center mt-10">
            <button
              onClick={() => navigate(-1)}
              className="text-blue-600 hover:underline text-sm"
            >
              ⬅ Back to Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgressPage;
