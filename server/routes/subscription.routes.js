import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import {
  startTrial,
  checkSubscription
} from '../controllers/subscription.controller.js';

const router = express.Router();

router.post('/start', authMiddleware, startTrial);
router.get('/', authMiddleware, checkSubscription);

export default router;
