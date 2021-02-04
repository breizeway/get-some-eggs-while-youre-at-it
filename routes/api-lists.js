const { User } = require('../db/models');
const express = require('express');
const { check } = require('express-validator');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { asyncHandler, csrfProtection, handleValidationErrors } = require('./utils');
const { listData, taskData } = require('../data')

router.put('/', asyncHandler( async(req, res) => {
  const user = req.session.user
  const allLists = await listData.all(user.id);
  const data = allLists.map(list => ({
    listName: list.name,
    href: `/lists/${list.id}`
  }));
  res.json(data);
}));
