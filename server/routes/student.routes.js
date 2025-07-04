import express from 'express';
import { saveStudentInfo, getStudentInfo } from '../controllers/student.controller.js';
import { protect } from '../middlewares/auth.middleware.js'; // ✅ use named export if needed

const router = express.Router();

router.post('/info', protect, saveStudentInfo);
router.get('/info/:id', protect, getStudentInfo);

export default router;
