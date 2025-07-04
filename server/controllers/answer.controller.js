import Answer from '../models/answer.model.js';

export const submitAnswer = async (req, res) => {
  try {
    const { questionId, selectedAnswer } = req.body;
    const answer = new Answer({
      question: questionId,
      user: req.user._id,
      selectedAnswer,
    });
    await answer.save();
    res.status(201).json({ message: "Answer submitted", answer });
  } catch (err) {
    res.status(500).json({ message: "Error submitting answer", error: err.message });
  }
};

// Admin only: View who answered what
export const getAllAnswers = async (req, res) => {
  try {
    const answers = await Answer.find().populate('question').populate('user', 'name email');
    res.json(answers);
  } catch (err) {
    res.status(500).json({ message: "Error fetching answers" });
  }
};
