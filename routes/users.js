const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, csrfProtection, handleValidationErrors } = require('./utils');

const userSignupValidation = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a First Name"),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Last Name"),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a email address")
    .isEmail()
    .withMessage("Please provide a valid email address"),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Password"),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your Password")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords must match"),
  handleValidationErrors
]

const userLoginValidation = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a email address")
    .isEmail()
    .withMessage("Please provide a valid email address"),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Password"),
  handleValidationErrors
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, asyncHandler(async (req, res) => {
  res.render('signup', { csrfToken: req.csrfToken() })
}));

router.post('/',
  userSignupValidation,
  csrfProtection,
  asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ firstName, lastName, email, password: hashedPassword });
  req.session.user = { id: user.id, email: user.email };
  res.redirect('/');
}));

router.get('/login', csrfProtection, (req, res) => {
  res.render('login', { csrfToken: req.csrfToken() });
});

router.post(
  '/login',
  userLoginValidation,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    const isPassword = await bcrypt.compare(password, user.password);
    if (isPassword) {
      // log user in
      console.log('session before login', req.session);
      req.session.user = { id: user.id, email: user.email };
      console.log('session after login', req.session);
      // redirect to index
      res.redirect('/lists');
    } else {
      res.render('login', { csrfToken: req.csrfToken(), errors: ['Invalid credentials, try again!'] });
    }
  })
);

router.get('/logout', (req, res) => {
  req.session.user = null
  res.redirect('/users/login')
})






module.exports = router;
