import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const SubjectChapters = ({ subject }) => {
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
        const res = await axios.get(`http://localhost:5000/api/chapters/${subject}`);
        setChapters(res.data);

        // Initialize expanded state for chapters
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
    const savedAttempts = JSON.parse(localStorage.getItem(`${subject}Attempts`) || '{}');
    const savedScores = JSON.parse(localStorage.getItem(`${subject}Scores`) || '{}');
    setAttempts(savedAttempts);
    setChapterScores(savedScores);

    fetchChapters();
  }, [subject]);

  const toggleChapter = (ch) => {
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
        { chapterId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { id } = res.data;
      await stripe.redirectToCheckout({ sessionId: id });
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

    setScore(sc);
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
    localStorage.setItem(`${subject}Attempts`, JSON.stringify(updatedAttempts));
    localStorage.setItem(`${subject}Scores`, JSON.stringify(updatedScores));

    const scaledScore = (sc / totalQuestions) * 100;

    try {
      const token = localStorage.getItem('auth_token');
      await axios.post(
        'http://localhost:5000/api/attempt',
        {
          subject,
          chapter: selectedChapter.chapter,
          score: Math.round(scaledScore),
          attemptNumber: updatedAttempts[selectedChapter._id],
          paid: false,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (err) {
      console.error('Failed to sync attempt:', err.response?.data || err.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          📘 Chapter-wise Questions – {subject}
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
                  <span className="text-gray-500 text-lg">{expanded[ch._id] ? '−' : '+'}</span>
                </div>

                {expanded[ch._id] && (
                  <div className="mt-4 flex gap-4 items-center">
                    <button
                      onClick={() => navigate('/progress')}
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

        {/* Instruction Modal and Exam Modal here, same as before... */}

        {/* ...Your modal code here remains unchanged, but make sure you replace hardcoded 'Mathematics' with {subject} in localStorage keys*/}
      </main>
    </div>
  );
};

export default SubjectChapters;
