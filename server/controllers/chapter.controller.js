import Chapter from '../models/chapter.model.js';

// Add new chapter
export const addChapter = async (req, res) => {
  try {
    const { subject, chapterName, description } = req.body;
    const newChapter = new Chapter({ subject, chapterName, description });
    await newChapter.save();
    res.status(201).json(newChapter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add chapter' });
  }
};

// Get all chapters
export const getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find();
    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chapters' });
  }
};
