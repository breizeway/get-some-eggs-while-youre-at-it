const { User } = require('../db/models');
const express = require('express');
const router = express.Router();
const { asyncHandler, convertListData, convertTaskData } = require('./utils');
const { listData, taskData, noteData } = require('../data')
const { requireAuth } = require('../auth');

router.use(requireAuth);

router.get('/:id', asyncHandler(async (req, res) => {
    const taskId = req.params.id;
    const user = req.session.user
    let lists = await listData.all(user.id)
    lists = convertListData(lists)
    const task = await taskData.byId(taskId);
    const listInfo = await listData.byId(task.listId)
    const selectedListId = listInfo.id
    const notes = await noteData.allNotes(taskId)
    const currentList = await listData.byId(task.listId);
    res.render('edit-tasks', { task, lists, notes, listInfo, selectedListId, currentList });
}));

router.post('/search', asyncHandler(async (req, res) => {
    const { search, listId } = req.body
    const listInfo = await listData.byId(listId)
    const selectedListId = listInfo.id
    const user = req.session.user
    const currUser = await taskData.userById(user.id)
    const currentList = { name: 'Search results'}
    let  searchTitle = `Here's what you need to get done ${currUser.firstName}...`

    let tasks = await taskData.searchTasks(search, user.id);
    tasks = convertTaskData(tasks);

    if (!tasks.length) {
        searchTitle = `Sorry, no matches were found. . .`
        tasks.push({
            name: 'Click here to return to inbox.',
            href: '/lists'
        })
    }

    let lists = await listData.all(user.id)
    lists = convertListData(lists);
    res.render('search-results', { tasks, lists, currentList, searchTitle, listInfo, selectedListId });
}))
module.exports = router;
