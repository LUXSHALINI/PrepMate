import express from 'express';
import {
  initiatePayment,
  stripeWebhook
} from '../controllers/payment.controller.js';
import { protect } from '../middlewares/auth.middleware.js'; // ✅ use named export if needed

const router = express.Router();

router.post('/', protect, initiatePayment);
router.post('/webhook', express.raw({ type: 'application/json' }), stripeWebhook); // Stripe needs raw body

export default router;
