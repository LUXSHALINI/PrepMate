import { useState } from 'react';
import SubjectCard from '../components/SubjectCard';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const MySubjects = () => {
  const [showExamModal, setShowExamModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjects = [
    {
      name: 'Mathematics',
      icon: '🧮',
      hours: '45h',
      lastStudied: '2 hours ago',
      progress: 78,
      completedTopics: 3,
      totalTopics: 4,
      topics: [
        { name: 'Algebra', done: true },
        { name: 'Geometry', done: true },
        { name: 'Calculus', done: true },
        { name: 'Statistics', done: false },
      ],
    },
    {
      name: 'Science',
      icon: '🔬',
      hours: '32h',
      lastStudied: '1 day ago',
      progress: 65,
      completedTopics: 2,
      totalTopics: 3,
      topics: [
        { name: 'Physics', done: true },
        { name: 'Chemistry', done: true },
        { name: 'Biology', done: false },
      ],
    },
    {
      name: 'English',
      icon: '📝',
      hours: '28h',
      lastStudied: '3 hours ago',
      progress: 89,
      completedTopics: 4,
      totalTopics: 4,
      topics: [
        { name: 'Grammar', done: true },
        { name: 'Literature', done: true },
        { name: 'Writing', done: true },
        { name: 'Reading', done: true },
      ],
    },
  ];

  const fetchQuestions = async (subject) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/questions/user?subject=${encodeURIComponent(subject)}`
      );
      setQuestions(res.data.slice(0, 10));
    } catch (err) {
      console.error('Failed to fetch questions:', err);
    }
  };

  const startExam = (subject) => {
    setSelectedSubject(subject);
    fetchQuestions(subject);
    setShowExamModal(true);
    setCurrentIndex(0);
    setAnswers({});
    setScore(null);
    setSubmitted(false);
  };

  const handleOptionChange = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
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

  const calculateScore = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/questions/evaluate', {
        answers,
      });
      setScore(res.data.score);
      setSubmitted(true);
    } catch (err) {
      console.error('Score calculation failed:', err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Subjects</h2>
          <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
            ➕ Add Subject
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {subjects.map((subj, idx) => (
            <div key={idx}>
              <SubjectCard subject={subj} />
              <div className="text-center mt-2">
                <button
                  onClick={() => startExam(subj.name)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  🎓 Take {subj.name} Exam
                </button>
              </div>
            </div>
          ))}
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
                    {selectedSubject} – Question {currentIndex + 1} of {questions.length}
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
                  <p className="text-lg">
                    Your Score:{' '}
                    <span className="font-semibold">{score} / {questions.length}</span>
                  </p>
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

export default MySubjects;
