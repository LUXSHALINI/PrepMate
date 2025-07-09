import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js'; 
import userRoutes from './routes/userRoutes.js';
// import paymentRoutes from './routes/payment.routes.js';

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


// ==== General Routes ====
app.use('/api/users', userRoutes);
app.use('/api/auth',  authRoutes);


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
 


  