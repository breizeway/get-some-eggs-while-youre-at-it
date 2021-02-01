const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('./utils');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', asyncHandler(async (req, res) => {

  res.render('signup', { csrfToken: req.crsfToken() })
}));

module.exports = router;
