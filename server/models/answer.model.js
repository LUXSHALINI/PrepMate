import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  selectedAnswer: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Answer', answerSchema);
