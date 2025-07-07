import express from 'express';
import {
  createQuestion,
  getQuestionsForUser,
  getAllQuestionsAdmin,
  evaluateAnswers,
} from '../controllers/Question.controller.js';
import { protect, isAdmin } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', protect, isAdmin, createQuestion);
router.get('/user', getQuestionsForUser); // for student
router.get('/', protect, isAdmin, getAllQuestionsAdmin); // for admin
router.post('/evaluate', evaluateAnswers); // for student evaluation

export default router;


// import express from 'express';
// import { createQuestion, getAllQuestions } from '../controllers/Question.controller.js';
// import protect from '../middlewares/auth.middleware.js';

// const router = express.Router();

// router.post('/', protect, createQuestion);
// router.get('/', getAllQuestions);

// export default router;

