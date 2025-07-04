import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  bio: String,
  profilePic: String,

  dailyGoal: Number,
  breakTime: Number,
  preferredTime: String,
  difficulty: String,
});

export default mongoose.model("User", userSchema);
