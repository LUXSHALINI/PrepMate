import User from '../models/user.model.js';
import dayjs from 'dayjs';


// Start Free Trial
export const startTrial = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    if (user.trialStartDate)
      return res.status(400).json({ msg: 'Trial already started' });

    user.trialStartDate = new Date();
    user.subscriptionStatus = 'trial';
    await user.save();

    res.status(200).json({ msg: 'Trial started successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

//  Check Subscription Status
export const checkSubscription = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const startDate = dayjs(user.trialStartDate);
    const today = dayjs();
    const daysUsed = today.diff(startDate, 'day');
    const trialExpired = daysUsed >= 15;
  
    res.status(200).json({
      trialExpired,
      daysUsed,
      subscriptionStatus: user.subscriptionStatus
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};
