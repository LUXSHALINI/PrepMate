import User from "../models/User.js";

// 👤 Get logged-in user’s profile
export const getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user); // 🔐 from token
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// ✏️ Update logged-in user's profile
export const updateMyProfile = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.user, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};
