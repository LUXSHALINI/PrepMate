// controllers/authController.js
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '15d' });
};

export const signup = async (req, res) => {
  const { name, roll, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const newUser = await User.create({ name, roll, email, password });
    const token = generateToken(newUser._id);

    res.status(201).json({
      message: 'Signup successful',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        roll: newUser.roll
      },
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id);
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        roll: user.roll
      },
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


