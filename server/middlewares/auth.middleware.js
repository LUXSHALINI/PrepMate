import { verifyToken } from '../config/jwt.js';

// ✅ Named export: protect middleware
// export const protect = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ error: 'Unauthorized: No token provided' });
//     }

//     const token = authHeader.split(' ')[1];
//     const decoded = verifyToken(token); // your jwt.verify logic
//     req.user = decoded;
//     next();
//   } catch (err) {
//     console.error('JWT verification failed:', err.message);
//     res.status(401).json({ error: 'Unauthorized: Invalid token' });
//   }
// };

// ✅ Named export: isAdmin middleware
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next();
  } else {
    return res.status(403).json({ error: 'Access denied: Admins only' });
  }
};

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token' });
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token); // jwt.verify or your logic
  req.user = decoded;
  next();
};

