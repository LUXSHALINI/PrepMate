import express from 'express';
import { getDashboardData } from '../controllers/dashboard.controller.js';

const router = express.Router();

router.get('/:userId', getDashboardData);

export default router;
