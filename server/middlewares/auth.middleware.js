// middlewares/auth.middleware.js
import { verifyToken } from '../config/jwt.js';

export const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // ✅ Check if auth header exists and starts with "Bearer"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    // ✅ Verify token
    const decoded = verifyToken(token); // should include `id`, `role`, etc.

    // ✅ Safety check: make sure decoded contains id
    if (!decoded || !decoded.id) {
      return res.status(401).json({ error: 'Invalid token: user ID missing' });
    }

    // ✅ Attach decoded user to req
    req.user = decoded;

    console.log("🔐 Authenticated user:", decoded); // Helpful debug

    next();
  } catch (err) {
    console.error('❌ JWT verification failed:', err.message);
    return res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
  }
};


// ✅ Named export: isAdmin middleware
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next();
  } else {
    return res.status(403).json({ error: 'Access denied: Admins only' });
  }
};




