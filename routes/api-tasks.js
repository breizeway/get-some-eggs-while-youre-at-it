const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, convertListData, convertTaskData } = require('./utils');
const { listData, taskData } = require('../data')
const { requireAuth } = require('../auth');

router.use(requireAuth);

router.post('/', asyncHandler(async (req, res) => {
    const user = req.session.user
    const { name, listId } = req.body
    console.log("THE LIST ID::::::", listId)
    await taskData.create(user.id, name, listId)
    let tasks = await taskData.byList(listId)
    console.log("TASKS::::::", tasks)
    tasks = convertTaskData(tasks)
    res.json(tasks)
}));

module.exports = router 