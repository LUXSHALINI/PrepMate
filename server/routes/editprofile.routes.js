import express from "express";
import { getMyProfile, updateMyProfile } from "../controllers/editprofile.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/me", getMyProfile);       // 🔒 GET /api/users/me
router.put("/me", updateMyProfile);    // 🔒 PUT /api/users/me

export default router;
