// import express from 'express';
// import multer from 'multer';
// import { uploadQuestions } from '../controllers/adminchapterController.js';
// import upload from '../middlewares/upload.js';


// const router = express.Router();
// const upload = multer({ dest: 'uploads/' }); // temp upload path

// router.post('/upload-questions', upload.single('file'), uploadQuestions);

// export default router;


// routes/admin.js
import express from 'express';
import multer from 'multer';
import { uploadQuestions } from '../controllers/adminchapterController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload-questions', upload.single('file'), uploadQuestions);

export default router;

