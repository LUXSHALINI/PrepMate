// import mongoose from "mongoose";

// const questionSchema = new mongoose.Schema({
//   subject: { type: String, required: true },
//   difficulty: {
//     type: String,
//     enum: ["Easy", "Medium", "Hard"],
//     default: "Medium",
//   },
//   questionText: { type: String, required: true },
//   questionType: {
//     type: String,
//     enum: ["Multiple Choice", "True/False"],
//     default: "Multiple Choice",
//   },
//   options: [String],
//   explanation: String,
//   tags: [String],
// }, { timestamps: true });

// const Question = mongoose.model("Question", questionSchema);
// export default Question;
import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  subject: { type: String, required: true }, 
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
});

export default mongoose.model('Question', questionSchema);



