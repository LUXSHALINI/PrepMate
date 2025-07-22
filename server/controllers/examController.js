// controllers/examController.js
import ExamAttempt from "../models/ExamAttempt.js"; // ✅ use import

export const checkExamEligibility = async (req, res) => {
  try {
    const userId = req.user.id;
    const subject = req.params.subject;

    const attempts = await ExamAttempt.find({ userId, subject });

    if (attempts.length >= 2) {
      const hasPaidAttempt = attempts.some((a) => a.paid === true);
      if (!hasPaidAttempt) {
        return res.status(403).json({
          allowed: false,
          message: "Free attempts exhausted. Please pay to continue.",
        });
      }
    }

    res.status(200).json({ allowed: true });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const submitExamScore = async (req, res) => {
  try {
    const userId = req.user.id;
    const { subject, score, paid = false } = req.body;

    const previousAttempts = await ExamAttempt.find({ userId, subject });
    const attemptNumber = previousAttempts.length + 1;

    const attempt = new ExamAttempt({
      userId,
      subject,
      score,
      paid,
      attemptNumber,
    });

    await attempt.save();

    res.status(201).json({ message: "Score submitted", attempt });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit score", error: err.message });
  }
};

export const getMyProgress = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized: req.user missing" });
    }

    const userId = req.user.id;
    const attempts = await ExamAttempt.find({ userId });

    const latestScores = {};
    attempts.forEach((a) => {
      if (
        !latestScores[a.subject] ||
        a.createdAt > latestScores[a.subject].createdAt
      ) {
        latestScores[a.subject] = a;
      }
    });

    const result = Object.values(latestScores).map((a) => ({
      subject: a.subject,
      score: a.score,
    }));

    res.status(200).json(result);
  } catch (err) {
    console.error("🔥 Error in getMyProgress:", err);
    res.status(500).json({
      message: "Failed to fetch progress",
      error: err.message,
    });
  }
};
