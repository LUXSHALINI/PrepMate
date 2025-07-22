import ChapterAttempt from '../models/ExamAttempt.js';

export const getDetailedProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const attempts = await ChapterAttempt.find({ userId }).sort({ createdAt: 1 });

    const report = {};
    const suggestionsMap = {
      Math: "Practice formulas and apply in problems.",
      Physics: "Visualize concepts with diagrams.",
      Chemistry: "Focus on reactions and periodic trends.",
      Biology: "Revise with flashcards and flowcharts."
    };

    for (const attempt of attempts) {
      const { subject, chapter, score, createdAt } = attempt;
      if (!report[subject]) report[subject] = {};
      if (!report[subject][chapter]) report[subject][chapter] = [];

      report[subject][chapter].push({ score, createdAt });
    }

    const progressReport = [];

    for (const subject in report) {
      let totalScore = 0;
      let totalAttempts = 0;
      const chapters = [];

      for (const chapter in report[subject]) {
        const scores = report[subject][chapter].map(a => a.score);
        const last = scores[scores.length - 1];
        const improved = scores.length > 1 && last > scores[0];

        totalScore += last;
        totalAttempts += scores.length;

        chapters.push({
          chapter,
          attempts: scores.length,
          scores,
          lastScore: last,
          improvement: improved,
          message: improved ? "✅ Improved!" : "⚠️ Needs more practice"
        });
      }

      const avg = totalScore / chapters.length;
      const appreciation =
        avg >= 85 ? "🎉 Outstanding!"
      : avg >= 70 ? "💪 Great job!"
      : avg >= 50 ? "👍 Keep going"
      : "🔄 You need to practice more";

      const nextStep =
        avg >= 85 ? "🏁 Move to mock exams"
      : avg >= 60 ? "📘 Focus on weak chapters"
      : "🔁 Repeat chapter tests";

      progressReport.push({
        subject,
        averageScore: avg.toFixed(1),
        totalChapters: chapters.length,
        totalAttempts,
        appreciation,
        nextStep,
        suggestions: suggestionsMap[subject] || "Keep practicing",
        chapters
      });
    }

    res.status(200).json({ progressReport });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// post 
export const submitAttempt = async (req, res) => {
  try {
    const userId = req.user.id;
    const { subject, chapter, score, paid = false } = req.body;

    // Count previous attempts
    const previous = await ChapterAttempt.find({ userId, subject, chapter });
    const attemptNumber = previous.length + 1;

    const attempt = new ChapterAttempt({
      userId,
      subject,
      chapter,
      score,
      attemptNumber,
      paid,
    });

    await attempt.save();
    res.status(201).json({ message: "Attempt saved", attempt });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
