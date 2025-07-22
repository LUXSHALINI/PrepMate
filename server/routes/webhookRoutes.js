import express from 'express';
import bodyParser from 'body-parser';
import { stripeWebhook } from '../controllers/webhookController.js';
const app = express();
const router = express.Router();

// Normal body parser
app.use(express.json());

// Stripe raw body route
app.post(
  '/webhook',
  bodyParser.raw({ type: 'application/json' }), // Capture raw body
  stripeWebhook
);

export default router;