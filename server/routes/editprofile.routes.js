import express from "express";
import { getMyProfile, updateMyProfile } from "../controllers/editprofile.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/me", protect, getMyProfile);       // 🔒 GET /api/users/me
router.put("/me", protect, updateMyProfile);    // 🔒 PUT /api/users/me

export default router;
