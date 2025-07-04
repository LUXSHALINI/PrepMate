import User from '../models/User.js';

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { name, profilePic } = req.body;
  const user = await User.findByIdAndUpdate(req.params.id, { name, profilePic }, { new: true });
  res.json(user);
};
