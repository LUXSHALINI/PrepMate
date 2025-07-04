import express from 'express';
import { getAllStudents, toggleStudentStatus, sendNotification } from '../controllers/admin.controller.js';
import { isAdmin } from '../middlewares/auth.middleware.js';

const router = express.Router();

// View all students
router.get('/', isAdmin, getAllStudents);

// Activate/Deactivate student
router.patch('/students/:id/status', isAdmin, toggleStudentStatus);

// Send notification
router.post('/students/:id/notify', isAdmin, sendNotification);

export default router;

