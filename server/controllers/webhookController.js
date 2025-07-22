import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import payment from '../models/payment.model.js'

export const stripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook Error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      await payment.findOneAndUpdate(
        { sessionId: session.id },
        { paid: true }
      );
      console.log(`Payment marked as paid for session ${session.id}`);
    } catch (err) {
      console.error('Database update failed:', err);
    }
  }

  res.status(200).json({ received: true });
};

