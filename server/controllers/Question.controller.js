import Question from '../models/Question.model.js';

// ✅ Admin: Create a new question (with subject)
export const createQuestion = async (req, res) => {
  try {
    const { questionText, options, correctAnswer, subject } = req.body;

    if (!questionText || !options || !correctAnswer || !subject) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const question = await Question.create({
      questionText,
      options,
      correctAnswer,
      subject,
      createdBy: req.user ? req.user._id : null,
    });

    res.status(201).json({ message: 'Question created', question });
  } catch (err) {
    console.error('Create Question Error:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ User: Get questions by subject (without correct answers)
export const getQuestionsForUser = async (req, res) => {
  try {
    const { subject } = req.query;
    const filter = subject ? { subject } : {};
    const questions = await Question.find(filter).select('-correctAnswer');
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
};

// ✅ Admin: Get all questions with answers (optional subject filter)
export const getAllQuestionsAdmin = async (req, res) => {
  try {
    const { subject } = req.query;
    const filter = subject ? { subject } : {};
    const questions = await Question.find(filter);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
};

// ✅ Evaluate score
export const evaluateAnswers = async (req, res) => {
  try {
    const { answers } = req.body; // { questionId: selectedAnswer }

    if (!answers || typeof answers !== 'object') {
      return res.status(400).json({ message: 'Invalid answers object' });
    }

    const questionIds = Object.keys(answers);
    const questions = await Question.find({ _id: { $in: questionIds } });

    let score = 0;
    questions.forEach((q) => {
      if (answers[q._id] === q.correctAnswer) score++;
    });

    res.json({ score, total: questions.length });
  } catch (err) {
    console.error('Evaluation Error:', err.message);
    res.status(500).json({ message: 'Failed to evaluate answers' });
  }
};

