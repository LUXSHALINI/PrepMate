import dotenv from 'dotenv';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Chapter from '../models/chapter.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Replace with the final JSON that has both questionText and expectedAnswer
const jsonPath = path.join(__dirname, '../grade11_all_chapters_answers_filled.json');
const questionData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

async function seedQuestions() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas');

    await Chapter.deleteMany();

    const entries = Object.entries(questionData);
    for (const [chapter, questionList] of entries) {
      // Slice and map for model set 1 & 2
      const modelSets = [
        {
          setName: 'Model Set 1',
          questions: questionList.slice(0, 10)
        },
        {
          setName: 'Model Set 2',
          questions: questionList.slice(10, 20)
        }
      ];

      await Chapter.create({
        subject: 'Mathematics',
        chapter,
        modelSets
      });

      console.log(`Seeded: ${chapter}`);
    }

    console.log(' All chapters seeded with questions + answers!');
    process.exit();
  } catch (err) {
    console.error(' Error:', err);
    process.exit(1);
  }
}

seedQuestions();
