import express from 'express';
import { register } from '../controllers/auth.controller.js';
import { login } from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);


export default router;
