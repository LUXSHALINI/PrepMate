// // models/User.js
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: { type: String, unique: true },
//     password: String,
//     contactNumber: String,
//     profilePic: String,
//     role: {
//       type: String,
//       enum: ["user", "admin", "supplier"],
//       default: "user",
//     },
//   },
//   { timestamps: true }
// );

// // ✅ Fix for OverwriteModelError
// const User = mongoose.models.User || mongoose.model("User", userSchema);

// export default User;
