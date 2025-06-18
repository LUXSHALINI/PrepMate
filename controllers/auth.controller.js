import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const register = async (req, res) => {
  const { name, email, role, password } = req.body;
  try {
    //  Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    //  Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Create new user
    const newUser = await User.create({
      name,
      email,
      role,
      password: hashedPassword
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error during registration' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //  Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    //  Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    //  Sign JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '15d' }
    );

    //  Return success with token and user info
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Login failed. Server error' });
  }
};
