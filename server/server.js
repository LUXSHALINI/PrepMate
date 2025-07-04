import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import activityRoutes from './routes/activity.routes.js';
import authRoutes from './routes/auth.routes.js'; 
import userRoutes from './routes/userRoutes.js';
import studentRoutes from './routes/student.routes.js';
import chapterRoutes from './routes/chapter.routes.js';
import subscriptionRoutes from './routes/subscription.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import QuestionRoutes from './routes/Question.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';

// Load environment variables
dotenv.config();

// Create express app
const app = express();

// ✅ Middlewares
app.use(express.json());

// ✅ CORS config - allow specific origin or all
app.use(cors({
  origin: 'http://localhost:5173', // or your frontend port
  credentials: true               // 👈 Required if using cookies/sessions
}));

// ✅ Health check route
app.get('/', (req, res) => {
  res.status(200).send('✅ Server is up and CORS is enabled!');
});

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/api/questions', QuestionRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/dashboard', dashboardRoutes);


// ✅ MongoDB Connection and Server Start
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  });
 


  