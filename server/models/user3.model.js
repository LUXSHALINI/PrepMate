import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  streakDays: Number,
  studyHours: Number,
  completedTasks: Number,
  // add other fields as needed
});

// ✅ Check if model already exists before defining again
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
