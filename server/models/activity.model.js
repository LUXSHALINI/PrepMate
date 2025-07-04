import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['course', 'assignment', 'video'],
    required: true,
  },
  title: { type: String, required: true },
  time: { type: Date, required: true },
  status: { type: String, required: true },
});

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;
