import express from 'express';
import { getAllQuestions, getQuestionById, addQuestion } from '../controllers/question.controller.js';
import authMiddleware, { isAdmin } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Student: View all questions
router.get('/', authMiddleware, getAllQuestions);

// Student/Admin: View single question by ID
router.get('/:id', authMiddleware, getQuestionById);

// Admin: Add question
router.post('/', authMiddleware, isAdmin, addQuestion);

export default router;
