import express from 'express';
import {
  submitAnswer,
  getAllAnswers,
} from '../controllers/answer.controller.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, submitAnswer);
router.get('/admin', protect, isAdmin, getAllAnswers);

export default router;
