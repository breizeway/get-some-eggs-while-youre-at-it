const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, csrfProtection, handleValidationErrors, convertListData, convertTaskData } = require('./utils');
const { listData, taskData } = require('../data')
const { requireAuth } = require('../auth');

router.use(requireAuth);

router.get('/', csrfProtection, asyncHandler( async(req, res) => {
    const user = req.session.user
    const listId = await listData.byName(user.id, 'Inbox')
    res.redirect(`/lists/${listId}`);
}));

router.get('/:id', csrfProtection, asyncHandler(async(req, res) => {
    const listId = req.params.id
    const user = req.session.user
    let lists = await listData.all(user.id)
    lists = convertListData(lists)
    let tasks = await taskData.byList(listId)
    tasks = convertTaskData(tasks)
    res.render('tasks', { tasks, lists, listId, csrfToken: req.csrfToken() })
}));

module.exports = router
