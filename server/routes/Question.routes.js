import express from 'express';
import { protect, isAdmin } from '../middlewares/auth.middleware.js';
import {
  createQuestion,
  getQuestionsForUser,
  getAllQuestionsAdmin,
} from '../controllers/Question.controller.js';

const router = express.Router();

router.post('/', createQuestion);
router.get('/user', protect, getQuestionsForUser);
router.get('/',  getAllQuestionsAdmin);

export default router;

// import express from 'express';
// import { createQuestion, getAllQuestions } from '../controllers/Question.controller.js';
// import protect from '../middlewares/auth.middleware.js';

// const router = express.Router();

// router.post('/', protect, createQuestion);
// router.get('/', getAllQuestions);

// export default router;

