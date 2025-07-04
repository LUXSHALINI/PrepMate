import Subject from '../models/Subject.js';

export const getSubjects = async (req, res) => {
  const subjects = await Subject.find({ userId: req.params.id });
  res.json(subjects);
};

export const updateSubject = async (req, res) => {
  const subject = await Subject.findByIdAndUpdate(req.params.subjectId, req.body, { new: true });
  res.json(subject);
};
