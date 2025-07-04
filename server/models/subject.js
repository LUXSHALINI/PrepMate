import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  topicsCovered: Number,
  totalTopics: Number,
  studyTime: Number,
  lastStudied: Date
});

export default mongoose.model('Subject', subjectSchema);
