const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, csrfProtection, handleValidationErrors } = require('./utils');


router.get('/', csrfProtection, asyncHandler((req, res) => {
    const list = req.params
    const tasks = getTasks(list)
    res.render('lists', { csrfToken: req.csrfToken() });
}));

