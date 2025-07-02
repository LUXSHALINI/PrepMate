import User from '../models/user.model.js';

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: 'student' }).select('-password');
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

// Toggle Active/Inactive status
export const toggleStudentStatus = async (req, res) => {
  try {
    const student = await User.findById(req.params.id);
    if (!student || student.role !== 'student') {
      return res.status(404).json({ error: 'Student not found' });
    }

    student.active = !student.active;
    await student.save();

    res.status(200).json({ message: 'Student status updated', active: student.active });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update status' });
  }
};

// Send Notification (dummy logic)
export const sendNotification = async (req, res) => {
  const { message } = req.body;
  try {
    const student = await User.findById(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    // You can integrate real-time notifications or email service here
    console.log(`Sending message to ${student.email}: ${message}`);

    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send notification' });
  }
};
