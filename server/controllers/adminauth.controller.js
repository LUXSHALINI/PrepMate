const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await User.findOne({ email, role: "admin" });

  if (!admin || !bcrypt.compareSync(password, admin.password)) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET);
  res.json({ token });
};
