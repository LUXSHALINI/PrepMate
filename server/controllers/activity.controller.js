import Activity from '../models/activity.model.js';

// Get recent activities for a user
export const getRecentActivities = async (req, res) => {
  try {
    const userId = req.params.userId;
    const activities = await Activity.find({ userId })
      .sort({ time: -1 })
      .limit(10);

    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
};
