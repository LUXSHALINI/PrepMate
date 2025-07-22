// seed/seedQuestions.js
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Chapter from '../models/chapter.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../chapter_questions_mcq.json');
const chapterData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

async function seedQuestions() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    await Chapter.deleteMany();

    for (const [chapterName, questions] of Object.entries(chapterData)) {
      if (!questions.length) continue;

      const formattedQuestions = questions.map(q => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer
      }));

      await Chapter.create({
        subject: 'Mathematics',
        chapter: chapterName,
        questions: formattedQuestions
      });

      console.log(`✅ Seeded: ${chapterName}`);
    }

    console.log('🎉 All chapters seeded with questions and answers!');
    process.exit();
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
}

seedQuestions();
