// 

import Question from '../models/Question.model.js';

// Admin: Add new question

export const createQuestion = async (req, res) => {
  try {
    const { questionText, options, correctAnswer } = req.body;

    if (!questionText || !options || !correctAnswer) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const question = await Question.create({
      questionText,
      options,
      correctAnswer,
    });

    res.status(201).json({ message: 'Question created', question });
  } catch (err) {
    console.error('Create Question Error:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



// Public: Get all questions (without correctAnswer)
export const getQuestionsForUser = async (req, res) => {
  try {
    const questions = await Question.find().select('-correctAnswer');
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching questions" });
  }
};

// Admin: Get all questions with correctAnswer
export const getAllQuestionsAdmin = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching questions" });
  }
};
