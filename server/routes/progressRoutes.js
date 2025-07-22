import express from 'express';
import { protect } from '../middlewares/auth.middleware.js';
import { getDetailedProgress,submitAttempt} from '../controllers/progressController.js';

const router = express.Router();
router.post("/attempt", protect, submitAttempt);
router.get("/progress", protect, getDetailedProgress); 

export default router;
