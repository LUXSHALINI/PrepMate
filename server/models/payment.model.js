import mongoose from 'mongoose';

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
