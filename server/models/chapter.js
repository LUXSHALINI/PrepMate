import mongoose from 'mongoose';

const modelSetSchema = new mongoose.Schema({
  setName: {
    type: String,
    required: true,
  },
  questions: {
    type: [String], // array of questions
    required: true,
  }
});

const chapterSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
  modelSets: {
    type: [modelSetSchema],
    required: true,
  }
});

// Export as ES Module
const Chapter = mongoose.model('Chapter', chapterSchema);
export default Chapter;
