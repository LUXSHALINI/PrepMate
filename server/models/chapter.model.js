import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  chapterName: { type: String, required: true },
  description: { type: String },
});

export default mongoose.model('Chapter', chapterSchema);
