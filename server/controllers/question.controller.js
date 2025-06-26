import Question from '../models/question.model.js';

//  Get all questions (for students)
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json({ questions });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

//  Get a question by ID
export const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ error: 'Question not found' });
    res.status(200).json({ question });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch question' });
  }
};

//  Add a new question (Admin only)
export const addQuestion = async (req, res) => {
  try {
    const { subject, chapter, questionText, options, correctAnswer, explanation, difficulty } = req.body;

    const newQuestion = new Question({ subject, chapter, questionText, options, correctAnswer, explanation, difficulty });
    await newQuestion.save();

    res.status(201).json({ msg: 'Question added successfully', question: newQuestion });
  } catch (error) {
    res.status(400).json({ error: 'Failed to add question' });
  }
};
