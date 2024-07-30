/** Middleware for handling req authorization for routes. */
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');
const ExpressError = require('../helpers/expressError');

// Middleware to authenticate users
function authUser(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    // FIXES BUG #4
    // Check for token existence and validity
    if (!token) {
      throw new ExpressError("No token provided", 401);
    }

    const payload = jwt.verify(token, SECRET_KEY);
    req.user = payload;
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = { authUser };

