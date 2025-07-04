const express = require("express");
const router = express.Router();
const { getAllUsers, deleteUser } = require("../controllers/userController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.get("/", protectAdmin, getAllUsers);
router.delete("/:id", protectAdmin, deleteUser);

module.exports = router;
