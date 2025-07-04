const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  options: [String],
  answer: String,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Question", questionSchema);
