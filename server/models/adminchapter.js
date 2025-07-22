import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: false, default: '' } // ✅ Allow empty answers
});

const ChapterSchema = new mongoose.Schema({
  chapterName: { type: String, required: true },
  questions: [QuestionSchema]
});

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  chapters: [ChapterSchema]
});

export default mongoose.model('Subject', SubjectSchema);
