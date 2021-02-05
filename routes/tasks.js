const { User } = require('../db/models');
const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils');
const { listData, taskData } = require('../data')
const { requireAuth } = require('../auth');

router.use(requireAuth);

router.get('/:id', asyncHandler(async (req, res) => {
    const taskId = req.params.id;
    const task = await taskData.byId(taskId);
    res.render('edit-tasks', { task });
}));
