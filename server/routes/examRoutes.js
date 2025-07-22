
import express from "express";
import {
  checkExamEligibility,
  submitExamScore,
  getMyProgress,
} from "../controllers/examController.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/check-attempt/:subject", protect, checkExamEligibility);
router.post("/submit", protect, submitExamScore);

export default router; 
