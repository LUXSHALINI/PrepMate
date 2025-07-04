import Activity from '../models/Activity.js';

export const getActivities = async (req, res) => {
  const activities = await Activity.find({ userId: req.params.id });
  res.json(activities);
};

export const updateActivity = async (req, res) => {
  const { day, studyHours } = req.body;
  const updated = await Activity.findOneAndUpdate(
    { userId: req.params.id, day },
    { studyHours },
    { upsert: true, new: true }
  );
  res.json(updated);
};
