import express from 'express';
import {
  initiatePayment,
  stripeWebhook
} from '../controllers/payment.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, initiatePayment);
router.post('/webhook', express.raw({ type: 'application/json' }), stripeWebhook); // Stripe needs raw body

export default router;
