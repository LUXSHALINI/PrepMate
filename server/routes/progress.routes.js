import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  profilePic: String
});

export default mongoose.model('User', userSchema);
