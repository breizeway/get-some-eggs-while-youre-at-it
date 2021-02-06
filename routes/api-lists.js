const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, convertListData } = require('./utils');
const { listData, taskData } = require('../data')
const { requireAuth } = require('../auth');

router.use(requireAuth);

router.post('/', asyncHandler( async(req, res) => {
    const user = req.session.user
    const { name } = req.body
    await listData.create(user.id, name);
    let lists = await listData.all(user.id)
    lists = convertListData(lists)
    res.json(lists);
}));

router.patch('/', asyncHandler(async(req, res) => {
    const user = req.session.user
    let {listId} = req.body;
    listId = parseInt(listId)
    await listData.destroy(listId)

    let lists = await listData.all(user.id)
    lists = convertListData(lists)
    res.json(lists);
}))

module.exports = router;
