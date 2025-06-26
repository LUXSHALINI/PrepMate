import Stripe from 'stripe';
import mongoose from 'mongoose';
import User from '../models/user.model.js';
import Payment from '../models/payment.model.js'; // You should export this from your schema file

const stripe =new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Create Payment Session
export const initiatePayment = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'PrepMate Subscription' },
          unit_amount: 500 * 100, // $5.00
        },
        quantity: 1
      }],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
      metadata: {
        userId: req.user.id
      }
    });

    // Optional: Save pending payment in DB
    await Payment.create({
      userId: req.user.id,
      amount: 500,
      currency: 'usd',
      provider: 'stripe',
      paymentIntentId: session.id,
      status: 'pending'
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ msg: 'Payment initiation failed', error: err.message });
  }
};

// ✅ Stripe Webhook
export const stripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata.userId;

    //  Update payment record
    await Payment.findOneAndUpdate(
      { paymentIntentId: session.id },
      { status: 'success' }
    );

    // Update user subscription status
    const user = await User.findById(userId);
    if (user) {
      user.subscriptionStatus = 'paid';
      await user.save();
    }
  }

  res.status(200).json({ received: true });
};
