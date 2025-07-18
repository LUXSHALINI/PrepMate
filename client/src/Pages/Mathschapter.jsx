// src/pages/MathChapters.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


const MathChapters = () => {
  const navigate = useNavigate();



  const [chapters, setChapters] = useState([]);
  const [questions, setQuestions] = useState({});
  const [expanded, setExpanded] = useState({});
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  const [showExamModal, setShowExamModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [attempts, setAttempts] = useState({});
  const [chapterScores, setChapterScores] = useState({});

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/chapters/Mathematics');
        setChapters(res.data);
        const initialExpand = {};
        res.data.forEach((ch) => {
          initialExpand[ch._id] = false;
        });
        setExpanded(initialExpand);
      } catch (err) {
        console.error('Failed to load chapters:', err);
      }
    };

    // Load attempts and scores from localStorage
    const savedAttempts = JSON.parse(localStorage.getItem('mathAttempts') || '{}');
    const savedScores = JSON.parse(localStorage.getItem('mathScores') || '{}');
    setAttempts(savedAttempts);
    setChapterScores(savedScores);

    fetchChapters();
  }, []);

  const toggleChapter = async (ch) => {
    setExpanded((prev) => ({ ...prev, [ch._id]: !prev[ch._id] }));
    setSelectedChapter(ch);
  };

  const fetchQuestions = async (chapterId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/chapters/questions/${chapterId}`);
      setQuestions((prev) => ({ ...prev, [chapterId]: res.data.questions }));
    } catch (err) {
      console.error('Failed to fetch questions:', err);
    }
  };


  const startExam = async () => {
    await fetchQuestions(selectedChapter._id);
    setShowInstructionModal(false);
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
    if (currentIndex < questions[selectedChapter._id].length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      calculateScore();
    }
  };
  const handlePayment = async (chapterId) => {
    try {
      const stripe = await stripePromise;
      const token = localStorage.getItem('auth_token');

      const res = await axios.post(
        'http://localhost:5000/api/payments/create-checkout-session',
        { chapterId }, // Send the chapterId to backend
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { id } = res.data;
      await stripe.redirectToCheckout({ sessionId: id });
      // Redirect to Stripe Checkout
      // const result = await stripe.redirectToCheckout({ sessionId });
     
      if (result.error) {
        console.error('Stripe checkout error:', result.error.message);
        alert('Payment failed. Try again.');
      }
    } catch (err) {
      console.error('Payment initiation failed:', err);
      alert('Something went wrong with payment.');
    }
  };

  const calculateScore = async () => {
    let sc = 0;
    const totalQuestions = questions[selectedChapter._id].length;

    questions[selectedChapter._id].forEach((q) => {
      if (answers[q._id] === q.correctAnswer) sc++;
    });

    setScore(sc); // out of 10
    setSubmitted(true);

    const updatedAttempts = {
      ...attempts,
      [selectedChapter._id]: (attempts[selectedChapter._id] || 0) + 1,
    };
    const updatedScores = {
      ...chapterScores,
      [selectedChapter._id]: sc,
    };

    setAttempts(updatedAttempts);
    setChapterScores(updatedScores);
    localStorage.setItem('mathAttempts', JSON.stringify(updatedAttempts));
    localStorage.setItem('mathScores', JSON.stringify(updatedScores));

    // ✅ Convert score to 100 scale
    const scaledScore = (sc / totalQuestions) * 100;

    // 🔁 Sync to backend
    try {
      const token = localStorage.getItem('auth_token');
      await axios.post(
        'http://localhost:5000/api/attempt',
        {
          subject: 'Mathematics',
          chapter: selectedChapter.chapter,
          score: Math.round(scaledScore), // round to nearest whole number
          attemptNumber: updatedAttempts[selectedChapter._id],
          paid: false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('✅ Attempt saved to backend with score:', Math.round(scaledScore));
    } catch (err) {
      console.error('❌ Failed to sync attempt:', err.response?.data || err.message);
    }

  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          📘 Chapter-wise Questions – Mathematics
        </h1>

        {chapters.length === 0 ? (
          <p className="text-center text-gray-600">No chapters found.</p>
        ) : (
          chapters.map((ch, index) => {
            const isLocked = (attempts[ch._id] || 0) >= 2;
            return (
              <div key={ch._id} className="bg-white p-4 mb-4 rounded shadow">
                <div
                  onClick={() => toggleChapter(ch)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <h2 className="text-xl font-semibold text-teal-700">
                    📘 Chapter {index + 1}: {ch.chapter}
                  </h2>
                  <span className="text-gray-500 text-lg">
                    {expanded[ch._id] ? '−' : '+'}
                  </span>
                </div>

                {expanded[ch._id] && (
               <div className="mt-4 flex gap-4 items-center">
           
               <button
                 onClick={() => navigate("/progress", { state: { subject: "Mathematics" } })}
                 className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
               >
                 📊 View Progress
               </button>
             
            
               {isLocked ? (
                 <button
                   onClick={() => handlePayment(ch._id)}
                   className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                 >
                  Pay Now
                 </button>
               ) : (
                 <button
                   onClick={() => setShowInstructionModal(true)}
                   className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                 >
                   📝 Take Exam
                 </button>
               )}
             </div>
             

                )}
              </div>
            );
          })
        )}

        {/* Instruction Modal */}
        {showInstructionModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded w-full max-w-lg relative">
              <button onClick={() => setShowInstructionModal(false)} className="absolute top-2 right-3 text-gray-500 text-xl">×</button>
              <h2 className="text-xl font-bold mb-2">📘 Instructions</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>You can attempt a chapter exam up to 2 times for free.</li>
                <li>One question will appear at a time with 4 options.</li>
                <li>Select one correct answer and move to the next.</li>
                <li>After submission, your score will appear immediately.</li>
                <li>After 2 attempts, the exam will be locked unless unlocked by payment.</li>
              </ul>
              <div className="text-right mt-4">
                <button
                  onClick={startExam}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  ✅ Start Exam
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Exam Modal */}
        {showExamModal && selectedChapter && questions[selectedChapter._id] && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded w-full max-w-xl relative">
              <button onClick={() => setShowExamModal(false)} className="absolute top-2 right-3 text-gray-500 text-xl">×</button>
              {!submitted ? (
                <>
                  <h2 className="text-lg font-bold text-teal-700">
                    Question {currentIndex + 1} of {questions[selectedChapter._id].length}
                  </h2>
                  <p className="font-medium mt-2">{questions[selectedChapter._id][currentIndex].question}</p>
                  <div className="space-y-2 mt-2">
                    {questions[selectedChapter._id][currentIndex].options.map((opt, i) => (
                      <label key={i} className="block">
                        <input
                          type="radio"
                          name={`q-${questions[selectedChapter._id][currentIndex]._id}`}
                          value={opt}
                          checked={answers[questions[selectedChapter._id][currentIndex]._id] === opt}
                          onChange={() => handleOptionChange(questions[selectedChapter._id][currentIndex]._id, opt)}
                          className="mr-2"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    <button onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0} className="bg-gray-200 px-4 py-1 rounded disabled:opacity-50">Previous</button>
                    <button onClick={handleNext} className="bg-green-600 text-white px-4 py-1 rounded">
                      {currentIndex === questions[selectedChapter._id].length - 1 ? 'Finish Exam' : 'Next'}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-green-700">🎉 Exam Completed!</h2>
                  <p className="text-lg">
                    Your Score: <span className="font-semibold">{score} / {questions[selectedChapter._id].length}</span>
                  </p>
                  <button onClick={() => setShowExamModal(false)} className="bg-blue-600 text-white px-6 py-2 rounded">Close</button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MathChapters; 