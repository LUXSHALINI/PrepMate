import express from 'express';
import { saveStudentInfo, getStudentInfo } from '../controllers/student.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/info', authMiddleware, saveStudentInfo);
router.get('/info/:id', authMiddleware, getStudentInfo);

export default router;
