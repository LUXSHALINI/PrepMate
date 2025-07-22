import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js'; 
import userRoutes from './routes/userRoutes.js';
import chapterRoutes from './routes/chapterRoutes.js';
import paymentRoutes from './routes/payment.routes.js';
// import examRoutes from './routes/examRoutes.js';
// import profileRoutes from "./routes/profileRoutes.js";
import progressRoutes from "./routes/progressRoutes.js"; // NEW
import questionsRoutes from './routes/adminchapterRoutes.js';
import webhookRoutes from './routes/webhookRoutes.js'



// Load environment variables
dotenv.config();
// Create express app
const app = express();
app.use('/api',webhookRoutes)
// Middlewares
app.use(express.json());

//  CORS config - allow specific origin or all
app.use(cors({
  origin: 'http://localhost:5173', // or your frontend port
  credentials: true               // 👈 Required if using cookies/sessions
}));

// Health check route
app.get('/', (req, res) => {
  res.status(200).send('✅ Server is up and CORS is enabled!');
});


// ==== General Routes ====
app.use('/api/users', userRoutes);
app.use('/api/auth',  authRoutes);
app.use('/api/chapters', chapterRoutes); // <-- mount it here
app.use('/api/payments', paymentRoutes);
// app.use("/api/exams", examRoutes);
// app.use("/api/user", profileRoutes);
app.use("/api", progressRoutes); //  add here
app.use('/api/admin', questionsRoutes);


// MongoDB Connection and Server Start
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => {
      console.log(` Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1);
  });
 


  