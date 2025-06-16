import express from 'express';
import { getAllChapters, getChapterById, addChapter } from '../controllers/chapter.controller.js';
import authMiddleware, { isAdmin } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', getAllChapters);                     // Public
router.get('/:id', getChapterById);                  // Public
router.post('/', authMiddleware, isAdmin, addChapter); // Admin only

export default router;
