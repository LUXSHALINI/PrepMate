import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  getChapterQuestions,
  deleteUser
} from '../controllers/userController.js';
import { addFeedback } from '../controllers/userController.js';
const router = express.Router();
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/users/:userId/feedback', addFeedback);
router.get('/questions/:subject/:chapter', getChapterQuestions);

export default router;
