const express = require("express");
const router = express.Router();
const { getQuestions, addQuestion, deleteQuestion } = require("../controllers/questionController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.get("/", protectAdmin, getQuestions);
router.post("/", protectAdmin, addQuestion);
router.delete("/:id", protectAdmin, deleteQuestion);

module.exports = router;
