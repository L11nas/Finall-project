const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Token verification failed' });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ error: 'Token not provided' });
  }
};

module.exports = { authenticateToken };
