import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, "your_secret_key");
    req.user = decoded; // Attach the user info to the request object
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export default auth;
