import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  chapter: { type: String, required: true },
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  explanation: { type: String },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' }
}, { timestamps: true });

export default mongoose.model('Question', questionSchema);
