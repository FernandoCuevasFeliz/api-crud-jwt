const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

function verifyToken(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(400).json({ auth: false });

  const payload = jwt.verify(token, secretKey);
  req.userId = payload._id;

  next();
}

module.exports = verifyToken;
