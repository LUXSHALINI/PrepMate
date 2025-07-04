import { useState, useEffect } from 'react';
import { getQuestionsForUser } from '../Services/questionService';
import { submitAnswer } from '../Services/answerService';

export default function UserQuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});

  const fetchQuestions = async () => {
    try {
      const res = await getQuestionsForUser();
      setQuestions(res.data);
    } catch (err) {
      alert('Failed to load questions');
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleSubmit = async (questionId) => {
    if (!answers[questionId]) return alert("Please select an answer.");
    try {
      await submitAnswer(questionId, answers[questionId]);
      setSubmitted({ ...submitted, [questionId]: true });
    } catch (err) {
      alert("Submission failed");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Answer Questions</h1>
      {questions.map((q, idx) => (
        <div key={q._id} className="bg-white p-4 mb-4 shadow rounded">
          <p className="font-semibold">{idx + 1}. {q.questionText}</p>
          <div className="mt-2">
            {q.options.map((opt, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`question-${q._id}`}
                  value={opt}
                  checked={answers[q._id] === opt}
                  onChange={() => setAnswers({ ...answers, [q._id]: opt })}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
          <button
            onClick={() => handleSubmit(q._id)}
            className={`mt-3 px-3 py-1 rounded ${
              submitted[q._id] ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white"
            }`}
            disabled={submitted[q._id]}
          >
            {submitted[q._id] ? "Submitted" : "Submit"}
          </button>
        </div>
      ))}
    </div>
  );
}
