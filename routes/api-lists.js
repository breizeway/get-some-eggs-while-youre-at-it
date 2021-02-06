const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, convertListData } = require('./utils');
const { listData, taskData, noteData } = require('../data')
const { requireAuth } = require('../auth');

// const destroyContents = async listId => {
//     const tasks = await taskData.byList(listId);
//     if(tasks.length) {
//         tasks.forEach(async task => {
//         const notes = await noteData.allNotes(task.id);

//             if (notes.length){
//                 notes.forEach(async note => {
//                 await noteData.destroyNote(note.id)
//                 })
//             }
//         })
//     }
// }

router.use(requireAuth);

router.post('/', asyncHandler( async(req, res) => {
    const user = req.session.user
    const { name } = req.body
    await listData.create(user.id, name);
    let lists = await listData.all(user.id)
    lists = convertListData(lists)
    res.json(lists);
}));

router.delete('/', asyncHandler(async(req, res) => {
    const user = req.session.user
    let {listId} = req.body;
    listId = parseInt(listId)
    await listData.destroy(listId)

    let lists = await listData.all(user.id)
    lists = convertListData(lists)
    res.json(lists);
}))

module.exports = router;
