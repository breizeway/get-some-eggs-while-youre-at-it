const { User } = require('../db/models');
const express = require('express');
const router = express.Router();
const { asyncHandler, convertListData } = require('./utils');
const { listData, taskData, noteData } = require('../data')
const { requireAuth } = require('../auth');

router.use(requireAuth);

router.get('/:id', asyncHandler(async (req, res) => {
    const taskId = req.params.id;
    const user = req.session.user
    let lists = await listData.all(user.id)
    lists = convertListData(lists)
    const task = await taskData.byId(taskId);
    const notes = await noteData.allNotes(taskId)
    res.render('edit-tasks', { task, lists, notes });
}));

router.get('/search', asyncHandler(async (req, res) => {
    const { search } = req.body
    const user = req.session.user

}))
module.exports = router;
