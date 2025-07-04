import User from "../models/User.js";

// 👁 GET logged-in user's profile
export const getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user); // ✅ user ID from token
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// ✏️ PUT - Update logged-in user's profile
export const updateMyProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user,        // ✅ ID from token
      req.body,        // ✅ Updated fields from frontend
      { new: true }    // ✅ Return updated object
    );
    res.json(updatedUser); // ✅ Send back for dashboard
  } catch (err) {
    res.status(500).json({ error: "Profile update failed" });
  }
};
