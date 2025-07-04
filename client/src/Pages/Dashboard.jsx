import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import SubjectProgressCard from '../components/SubjectProgressCard';
import ActivityItem from '../components/ActivityItem';
import axios from 'axios';

const Dashboard = () => {
  const [showExamModal, setShowExamModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/questions');
      setQuestions(res.data.slice(0, 10));
    } catch (err) {
      console.error('Failed to fetch questions:', err);
    }
  };

  const startExam = () => {
    fetchQuestions();
    setShowExamModal(true);
    setCurrentIndex(0);
    setAnswers({});
    setScore(null);
    setSubmitted(false);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleOptionChange = (qid, value) => {
    setAnswers({ ...answers, [qid]: value });
  };

  const calculateScore = () => {
    let total = 0;
    questions.forEach((q) => {
      if (answers[q._id] === q.correctAnswer) {
        total++;
      }
    });
    setScore(total);
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 relative">
        {/* Welcome Box */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="text-xl font-bold text-green-700 mb-1">Welcome {user.name || 'User'}!</h2>
          <p className="text-sm text-gray-600">{user.email || 'Not available'}</p>
          <p className="text-sm text-gray-500 mt-1">Bio: Dedicated student preparing for competitive exams</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard label="Study Hours" value="4.5h" icon="⏱️" />
          <StatCard label="Streak Days" value="7" icon="📆" />
          <StatCard label="Completed" value="12" icon="🎯" />
        </div>

        {/* Subject Progress */}
        <h3 className="text-lg font-semibold mb-2">Subject Progress</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <SubjectProgressCard subject="Mathematics" progress={78} icon="🧮" />
          <SubjectProgressCard subject="Science" progress={65} icon="🔬" />
          <SubjectProgressCard subject="English" progress={89} icon="📘" />
        </div>

        {/* Activity */}
        <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
        <div className="space-y-2 mb-8">
          <ActivityItem text="Completed Mathematics Quiz - Algebra (Score: 92%)" time="2 hours ago" />
          <ActivityItem text="Studied Science - Chemical Reactions (120 minutes)" time="4 hours ago" />
          <ActivityItem text="Completed English Grammar Exercise" time="Yesterday" />
        </div>

        {/* Exam Button */}
        <div className="text-center">
          <button
            onClick={startExam}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            🎓 Take the Exam
          </button>
        </div>

        {/* Exam Modal */}
        {showExamModal && questions.length > 0 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow w-full max-w-xl relative space-y-4">
              <button
                onClick={() => setShowExamModal(false)}
                className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
              >
                &times;
              </button>

              {!submitted ? (
                <>
                  <h2 className="text-lg font-bold text-teal-700">
                    Question {currentIndex + 1} of {questions.length}
                  </h2>
                  <p className="font-medium">{questions[currentIndex].questionText}</p>

                  <div className="space-y-2">
                    {questions[currentIndex].options.map((opt, i) => (
                      <label key={i} className="block">
                        <input
                          type="radio"
                          name={`q-${questions[currentIndex]._id}`}
                          value={opt}
                          checked={answers[questions[currentIndex]._id] === opt}
                          onChange={() => handleOptionChange(questions[currentIndex]._id, opt)}
                          className="mr-2"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={handlePrevious}
                      disabled={currentIndex === 0}
                      className="bg-gray-200 px-4 py-1 rounded disabled:opacity-50"
                    >
                      Previous
                    </button>

                    <button
                      onClick={handleNext}
                      className="bg-green-600 text-white px-4 py-1 rounded"
                    >
                      {currentIndex === questions.length - 1 ? 'Finish Exam' : 'Next'}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-green-700">🎉 Exam Completed!</h2>
                  <p className="text-lg">Your Score: <span className="font-semibold">{score} / {questions.length}</span></p>
                  <button
                    onClick={() => setShowExamModal(false)}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
