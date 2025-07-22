import express from 'express';
import multer from 'multer';
import {
  uploadJsonChapters,
  getChaptersBySubject,
  getChapterQuestions,
  createChapter,
  updateChapter,
  deleteChapter,
} from '../controllers/chapterController.js';
import { getAllChapters } from '../controllers/chapterController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // in-memory upload for JSON files

// Upload JSON file of chapters/questions (requires 'file' form-data and 'subject' in body)
router.post('/upload-json', upload.single('file'), uploadJsonChapters);

// Get chapters list for a subject
router.get('/:subject', getChaptersBySubject);

// Get questions for a chapter by id
router.get('/questions/:chapterId', getChapterQuestions);

// Create a new chapter manually
router.post('/', createChapter);
router.get('/admin/all', getAllChapters);

// Update chapter by id
router.put('/:id', updateChapter);

// Delete chapter by id
router.delete('/:id', deleteChapter);

export default router;
