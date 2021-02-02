const { User } = require('../db/models');
const express = require('express');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('./utils');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, asyncHandler(async (req, res) => {

  res.render('signup', { csrfToken: req.csrfToken() })
}));

router.post('/', csrfProtection, asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log('PASSWORD:', password);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ firstName, lastName, email, password: hashedPassword });
  req.session.user = { user };
  res.redirect('/');
}));

module.exports = router;
