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

router.delete('/', asyncHandler( async(req, res) => {
    const user = req.session.user;
    const htmlId = req.body;
    const id = htmlId.split('_')[1] // is string--does sequelize need an integer?
    // listdata delete
}));

module.exports = router;
