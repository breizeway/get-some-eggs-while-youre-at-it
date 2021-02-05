const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, csrfProtection, handleValidationErrors } = require('./utils');
const { listData, taskData } = require('../data')

router.post('/', asyncHandler( async(req, res) => {
  const user = req.session.user
  const { name } = req.body
  const newList = await listData.create(user.id, name);
  // const allLists = await listData.all(user.id);
  const data = {
    listName: newList.name,
    href: `/lists/${newList.id}`
  }
  res.json(data);
}));


module.exports = router;