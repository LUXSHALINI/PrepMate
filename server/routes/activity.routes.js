import express from 'express';
import { getRecentActivities } from '../controllers/activity.controller.js';

const router = express.Router();

router.get('/:userId', getRecentActivities);

export default router;
