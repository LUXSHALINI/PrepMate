import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    trim: true
  },
  chapterName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model('Chapter', chapterSchema);
