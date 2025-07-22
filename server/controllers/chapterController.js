import Chapter from '../models/chapter.js';

export const uploadJsonChapters = async (req, res) => {
  try {
    const subject = req.body.subject;
    if (!subject) return res.status(400).json({ message: 'Subject is required' });
    if (!req.file) return res.status(400).json({ message: 'File is required' });

    const jsonString = req.file.buffer.toString();
    const parsed = JSON.parse(jsonString);

    if (!Array.isArray(parsed)) {
      return res.status(400).json({ message: 'Uploaded JSON must be an array of chapters' });
    }

    const savedChapters = [];

    for (const chapter of parsed) {
      if (!chapter.chapter || !Array.isArray(chapter.questions)) {
        return res.status(400).json({ message: 'Each chapter must include a chapter name and questions array' });
      }

      for (const q of chapter.questions) {
        if (!q.question || !Array.isArray(q.options) || !q.correctAnswer) {
          return res.status(400).json({ message: 'Each question must include question, options, and correctAnswer' });
        }
      }

      const newChapter = new Chapter({
        subject,
        chapter: chapter.chapter,
        questions: chapter.questions
      });

      const saved = await newChapter.save();
      savedChapters.push(saved);
    }

    res.status(200).json({ message: 'Chapters uploaded successfully', chapters: savedChapters });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(400).json({ message: 'Invalid file format or server error' });
  }
};

// Get all chapters by subject (only _id and chapter name)
export const getChaptersBySubject = async (req, res) => {
  try {
    const { subject } = req.params;
    if (!subject) return res.status(400).json({ error: 'Subject is required' });

    const chapters = await Chapter.find({ subject }).select('_id chapter').lean();
    res.json(chapters);
  } catch (err) {
    console.error('Get chapters error:', err);
    res.status(500).json({ message: 'Error fetching chapters', error: err.message });
  }
};

// Get questions for a chapter by chapter id
export const getChapterQuestions = async (req, res) => {
  try {
    const { chapterId } = req.params;
    if (!chapterId) return res.status(400).json({ error: 'Chapter ID is required' });

    const chapter = await Chapter.findById(chapterId).lean();
    if (!chapter) return res.status(404).json({ message: 'Chapter not found' });

    res.json({ questions: chapter.questions });
  } catch (err) {
    console.error('Get questions error:', err);
    res.status(500).json({ message: 'Error fetching questions', error: err.message });
  }
};

// Create a new chapter manually
export const createChapter = async (req, res) => {
  try {
    const { subject, chapter, questions } = req.body;
    if (!subject || !chapter) {
      return res.status(400).json({ error: 'Subject and chapter are required' });
    }

    const newChapter = new Chapter({ subject, chapter, questions: questions || [] });
    await newChapter.save();
    res.status(201).json(newChapter);
  } catch (err) {
    console.error('Create chapter error:', err);
    res.status(400).json({ message: 'Error creating chapter', error: err.message });
  }
};

// Update chapter by ID
export const updateChapter = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedChapter = await Chapter.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedChapter) return res.status(404).json({ message: 'Chapter not found' });
    res.json(updatedChapter);
  } catch (err) {
    console.error('Update chapter error:', err);
    res.status(500).json({ message: 'Error updating chapter', error: err.message });
  }
};

// Delete chapter by ID
export const deleteChapter = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedChapter = await Chapter.findByIdAndDelete(id);
    if (!deletedChapter) return res.status(404).json({ message: 'Chapter not found' });
    res.json({ message: 'Chapter deleted' });
  } catch (err) {
    console.error('Delete chapter error:', err);
    res.status(500).json({ message: 'Error deleting chapter', error: err.message });
  }
};

// Get all chapters (admin)
export const getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find(); // Fetch all chapters
    res.json(chapters);
  } catch (err) {
    console.error('Error fetching all chapters:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
