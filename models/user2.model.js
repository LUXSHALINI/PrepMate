const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: 'student' },
  
    marks: { type: Object, default: {} },
    selectedSubjects: { type: [String], default: [] },
    subjectLevels: { type: Object, default: {} },
  
    // 🔥 New fields added below
    lastExamDate: { type: Date },
    revisionType: { type: String, enum: ['full', 'chapters'], default: 'full' },
    learningGoal: { type: String }, // e.g., "pass", "above75", "above90"
    studyHoursPerDay: { type: Number },
  
    trialStart: { type: Date, default: Date.now },
    subscriptionActive: { type: Boolean, default: false }
  });
  