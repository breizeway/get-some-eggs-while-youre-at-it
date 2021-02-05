const { User } = require('../db/models');
const express = require('express');
// const { check } = require('express-validator');
// const csrf = require('csurf');
// const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, csrfProtection, handleValidationErrors } = require('./utils');
const { listData, taskData } = require('../data')
const { requireAuth } = require('../auth');

router.use(requireAuth);

router.get('/', asyncHandler(async (req, res) => {
    const { taskId } = req.body;
    const task = await taskData.byId(taskId);
    res.render('edit-tasks', { task });
}));
