import User from '../models/user.model.js';

// Save Student Info (called after student submits exam marks and preferences)
export const saveStudentInfo = async (req, res) => {
  try {
    const {
      marks,
      selectedSubjects,
      lastExamDate,
      revisionType,
      learningGoal,
      studyHoursPerDay,
    } = req.body;

    const userId = req.user?.id; // req.user is set by auth middleware
    if (!userId) return res.status(401).json({ msg: 'Unauthorized access' });

    // Calculate subject levels based on marks
    const subjectLevels = {};
    for (const [subject, score] of Object.entries(marks)) {
      if (score < 50) subjectLevels[subject] = 'weak';
      else if (score <= 75) subjectLevels[subject] = 'medium';
      else subjectLevels[subject] = 'strong';
    }

    // Find and update the user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.marks = marks;
    user.selectedSubjects = selectedSubjects;
    user.subjectLevels = subjectLevels;
    user.lastExamDate = lastExamDate;
    user.revisionType = revisionType;
    user.learningGoal = learningGoal;
    user.studyHoursPerDay = studyHoursPerDay;

    await user.save();

    return res.status(200).json({
      msg: 'Student info saved and levels calculated',
      subjectLevels,
    });
  } catch (error) {
    console.error('Error saving student info:', error.message);
    return res.status(500).json({ error: 'Server error while saving student info' });
  }
};

//  Get Student Info (for profile page or dashboard display)
export const getStudentInfo = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).select(
      'marks selectedSubjects subjectLevels lastExamDate revisionType learningGoal studyHoursPerDay'
    );

    if (!user) return res.status(404).json({ msg: 'User not found' });

    return res.status(200).json({
      msg: 'Student info fetched successfully',
      user,
    });
  } catch (error) {
    console.error('Error fetching student info:', error.message);
    return res.status(500).json({ error: 'Server error while fetching student info' });
  }
};
