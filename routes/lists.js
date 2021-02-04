const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, csrfProtection, handleValidationErrors } = require('./utils');
const { listData, taskData } = require('../data')


router.get('/', csrfProtection, asyncHandler( async(req, res) => {
    const user = req.session.user
    const listId = await listData.byName(user.id, 'Inbox')
    res.redirect(`/lists/${listId}`);
}));

router.get('/:id', csrfProtection, asyncHandler(async(req, res) => {
    const listId = req.params.id
    const lists = await listData.all(user.id)
    const tasks = await taskData.byList(listId)
    res.render('lists', { tasks })
}))


module.exports = router
