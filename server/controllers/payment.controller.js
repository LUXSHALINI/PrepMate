import stripe from '../utils/stripe.js';
import ChapterPayment from '../models/payment.model.js';

export const createStripeSession = async (req, res) => {
  const { chapterId } = req.body;
  const userId = req.user.id;  // use `id`, not `_id`

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: 'Unlock Chapter Exam',
          },
          unit_amount: 4900, 
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `http://localhost:5173/payment-success?session_id={CHECKOUT_SESSION_ID}&chapterId=${chapterId}`,
      cancel_url: `http://localhost:5173/payment-failed`,
    });

    // Save session
    await ChapterPayment.create({
      userId,
      chapterId,
      sessionId: session.id,
      paid: false,
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: 'Failed to create payment session' });
  }
};

export const confirmPayment = async (req, res) => {
  const { session_id, chapterId } = req.query;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status === 'paid') {
      await ChapterPayment.findOneAndUpdate(
        { sessionId: session_id, chapterId },
        { paid: true }
      );
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Confirmation failed' });
  }
};

