const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { listData, taskData, noteData } = require('../data')
const { asyncHandler, convertListData, convertTaskData } = require('./utils');
const { requireAuth } = require('../auth');

router.use(requireAuth);

router.post('/', asyncHandler(async (req, res) => {
    const user = req.session.user
    const { name, listId } = req.body
    await taskData.create(user.id, name, listId)
    let tasks = await taskData.byList(listId)
    tasks = convertTaskData(tasks)
    res.json(tasks)
}));

router.post('/note', asyncHandler(async (req, res) => {
    const { note, taskId } = req.body
    const user = req.session.user
    const userId = user.id
    const newNote = await noteData.createNote(taskId, note, userId)

    res.json(newNote);

}))

router.delete('/', asyncHandler(async(req, res) => {
    const { noteId, taskId } = req.body;
    console.log(noteId, taskId)
    // listId = parseInt(listId)
    await noteData.destroyNote(noteId)
    const notes = await noteData.allNotes(taskId)
    res.json(notes);
}))

module.exports = router
