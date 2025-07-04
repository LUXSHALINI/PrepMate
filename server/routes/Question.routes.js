// routes/Question.routes.js
import express from "express";
import {isAdmin} from "../middlewares/auth.middleware.js"
import {
  createQuestion,
  getQuestions,
  getQuestionById,
  deleteQuestion,
} from "../controllers/Question.controller.js";


const router = express.Router();

router.post("/", isAdmin, createQuestion);
router.get("/", getQuestions);
router.get("/:id", getQuestionById);
router.delete("/:id", deleteQuestion);

export default router;
