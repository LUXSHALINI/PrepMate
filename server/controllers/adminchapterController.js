import Subject from '../models/adminchapter.js';
import fs from 'fs';

export const uploadQuestions = async (req, res) => {
  try {
    console.log('📁 Received file:', req.file);
    console.log('📨 Received body:', req.body);

    const { subject } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const rawData = fs.readFileSync(req.file.path, 'utf-8');

    let parsedData;
    try {
      parsedData = JSON.parse(rawData);
    } catch (err) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: 'Uploaded file is not valid JSON.' });
    }

    if (!subject || typeof parsedData !== 'object') {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: 'Invalid payload: subject and chapter data are required.' });
    }

    let subj = await Subject.findOne({ name: subject });
    if (!subj) subj = new Subject({ name: subject, chapters: [] });

    for (const [chapterName, questions] of Object.entries(parsedData)) {
      if (!Array.isArray(questions)) continue;

      for (const q of questions) {
        if (
          typeof q.question !== 'string' ||
          typeof q.answer !== 'string' // now allows empty string
        ) {
          fs.unlinkSync(req.file.path);
          return res.status(400).json({
            message: `Invalid question format in chapter "${chapterName}".`,
          });
        }
      }

      const index = subj.chapters.findIndex(ch => ch.chapterName === chapterName);
      if (index !== -1) {
        subj.chapters[index].questions = questions;
      } else {
        subj.chapters.push({ chapterName, questions });
      }
    }

    await subj.save();
    fs.unlinkSync(req.file.path);
    return res.status(200).json({ message: '✅ All chapters uploaded successfully!' });
  } catch (error) {
    console.error('❌ Upload questions error:', error);
    return res.status(500).json({ message: 'Server error while uploading questions.' });
  }
};


