// // controllers/userController.js
// import User from "../models/profile.js";

// export const getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select("-password");
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch profile" });
//   }
// };

// export const updateProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);

//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.contactNumber = req.body.contactNumber || user.contactNumber;

//     if (req.file) {
//       user.profilePic = req.file.path; // Cloudinary URL
//     }

//     const updated = await user.save();
//     const { password, ...rest } = updated._doc;
//     res.json(rest);
//   } catch (err) {
//     res.status(500).json({ message: "Profile update failed", error: err.message });
//   }
// };
