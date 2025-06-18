import Chapter from '../models/chapter.model.js';

//  GET /api/chapters - Public
export const getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find();
    res.status(200).json({ chapters });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chapters' });
  }
};

// GET /api/chapters/:id - Public
export const getChapterById = async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    if (!chapter) return res.status(404).json({ error: 'Chapter not found' });
    res.status(200).json({ chapter });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chapter' });
  }
};

// POST /api/chapters - Admin
export const addChapter = async (req, res) => {
  try {
    const { subject, chapterName, description } = req.body;
    const newChapter = new Chapter({ subject, chapterName, description });
    await newChapter.save();
    res.status(201).json({ msg: 'Chapter added', chapter: newChapter });
    
  } catch (err) {
    res.status(400).json({ error: 'Error adding chapter' });
  }
};
