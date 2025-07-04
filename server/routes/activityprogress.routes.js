import express from 'express';
import { getActivities, updateActivity } from '../controllers/activityController.js';

const router = express.Router();

router.get('/:id', getActivities);
router.put('/:id', updateActivity);

export default router;
