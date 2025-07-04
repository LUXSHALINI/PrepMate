import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: String,
  timestamp: { type: Date, default: Date.now },
  description: String
});

// ✅ Prevent model overwrite error
const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);

export default Activity;
