import express from 'express';
import { getAllStudents, toggleStudentStatus, sendNotification } from '../controllers/admin.controller.js';
import { verifyAdmin } from '../middlewares/auth.middleware.js';

const router = express.Router();

// View all students
router.get('/', verifyAdmin, getAllStudents);

// Activate/Deactivate student
router.patch('/students/:id/status', verifyAdmin, toggleStudentStatus);

// Send notification
router.post('/students/:id/notify', verifyAdmin, sendNotification);

export default router;

