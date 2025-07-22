import express from 'express';
import { createStripeSession} from '../controllers/payment.controller.js';
import { protect } from '../middlewares/auth.middleware.js'; // ✅ Use named import
import { confirmPayment } from '../controllers/payment.controller.js';

const router = express.Router();

router.post('/create-checkout-session', protect, createStripeSession);
router.get('/confirm', confirmPayment);

export default router;
