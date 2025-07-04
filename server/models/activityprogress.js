import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  day: String,
  studyHours: Number
});

export default mongoose.model('Activity', activitySchema);
