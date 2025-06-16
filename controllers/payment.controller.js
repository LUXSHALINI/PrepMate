// import Stripe from 'stripe';
import User from '../models/user.model.js';import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'LKR', // or 'INR' or 'USD' depending on your region
  },
  status: {
    type: String,
    enum: ['pending', 'success', 'failed'],
    default: 'pending',
  },
  provider: {
    type: String,
    enum: ['stripe', 'razorpay'],
    required: true,
  },
  paymentIntentId: {
    type: String, // For Stripe
  },
  razorpayPaymentId: {
    type: String, // For Razorpay
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Payment', paymentSchema);


// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ msg: 'Payment initiation failed', error: err.message });
  }
};

// ✅ Stripe Webhook to confirm payment
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

  // 🎯 Handle payment success
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata.userId;

    const user = await User.findById(userId);
    if (user) {
      user.subscriptionStatus = 'paid';
      await user.save();
    }
  }

  res.status(200).json({ received: true });
};
