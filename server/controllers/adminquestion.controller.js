const Question = require("../models/Question");

exports.getQuestions = async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
};

exports.addQuestion = async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.json({ msg: "Question added" });
};

exports.deleteQuestion = async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.json({ msg: "Question deleted" });
};
