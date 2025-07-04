import User from '../models/user3.model.js';
import SubjectProgress from '../models/SubjectProgress.js';
import Activity from '../models/Activity.js';

export const getDashboardData = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);
    const subjectProgress = await SubjectProgress.find({ userId });
    const activities = await Activity.find({ userId }).sort({ time: -1 }).limit(5);

    res.json({
      name: user.name,
      email: user.email,
      streakDays: user.streakDays,
      studyHours: user.studyHours,
      completedTasks: user.completedTasks,
      subjects: subjectProgress,
      recentActivity: activities,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to load dashboard data' });
  }
};
