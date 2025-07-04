import mongoose from 'mongoose';

const subjectProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subject: String,
  progress: Number,
});

export default mongoose.model('SubjectProgress', subjectProgressSchema);
