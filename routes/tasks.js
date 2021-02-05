const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, csrfProtection, handleValidationErrors } = require('./utils');
const { listData, taskData } = require('../data');

// add validation for task name length later

router.post('/', csrfProtection, asyncHandler(async (req, res) => {

}));

module.exports = router;
