import mongoose from 'mongoose';

const chapterAttemptSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subject: { type: String, required: true },
    chapter: { type: String, required: true },
    score: { type: Number, required: true },
    attemptNumber: { type: Number, required: true },
    paid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ChapterAttempt = mongoose.model('ChapterAttempt', chapterAttemptSchema);
export default ChapterAttempt;
