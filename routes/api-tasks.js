const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, convertListData } = require('./utils');
const { listData, taskData, noteData } = require('../data')
const { requireAuth } = require('../auth');

router.use(requireAuth);

router.post('/', asyncHandler(async (req, res) => {
    const user = req.session.user
    const { name } = req.body
    await taskData.create(name)
}));

router.post('/note', asyncHandler(async (req, res) => {
    const { note, taskId } = req.body
    const user = req.session.user
    const userId = user.id
    console.log(user.id, note, taskId)
    const newNote = await noteData.createNote(taskId, note, userId)

    res.json(newNote);

}))

module.exports = router
