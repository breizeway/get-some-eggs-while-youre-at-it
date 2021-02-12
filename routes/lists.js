const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, csrfProtection, handleValidationErrors, convertListData, convertTaskData, destroyNotes, destroyTasks } = require('./utils');
const { listData, taskData } = require('../data')
const { requireAuth } = require('../auth');

router.use(requireAuth);

router.get('/', csrfProtection, asyncHandler( async(req, res) => {
    const user = req.session.user
    const listId = await listData.byName(user.id, 'Inbox')
    res.redirect(`/lists/${listId}`);
}));

router.get('/:id', csrfProtection, asyncHandler(async(req, res) => {
    let listId = req.params.id
    listId = parseInt(listId, 10);
    const user = req.session.user
    const listInfo = await listData.byId(listId)
    let inboxId = await listData.byName(user.id, 'Inbox')
    inboxId = parseInt(inboxId, 10);
    const selectedListId = listInfo.id
    let lists = await listData.all(user.id)
    lists = convertListData(lists)
    let currentList;


    lists.forEach(list => {
        if (list.id === inboxId) list.inbox = true
        if (list.id === listId) {
            list.currentList = true
            currentList = list;
        }
    });

    let tasks = await taskData.byList(listId)
    tasks = convertTaskData(tasks)
    res.render('tasks', { tasks, lists, listId, listInfo, selectedListId, csrfToken: req.csrfToken(), currentList })
}));

router.post('/', asyncHandler( async (req, res) => {
    let { listId } = req.body;
    const user = req.session.user;
    const inboxId = await listData.byName(user.id, 'Inbox')

    if (listId == inboxId) return res.redirect('/');

    listId = parseInt(listId)
    await destroyNotes(listId)
    await destroyTasks(listId)
    await listData.destroy(listId)
    let lists = await listData.all(user.id)
    lists = convertListData(lists)
    res.redirect('/');
}))

module.exports = router
