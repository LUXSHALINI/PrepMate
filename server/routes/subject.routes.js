import express from 'express';
import { getSubjects, updateSubject } from '../controllers/subjectController.js';

const router = express.Router();

router.get('/:id', getSubjects);
router.put('/:subjectId', updateSubject);

export default router;
