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

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
    const user = req.session.user
    const listId = await taskData.byList(1)
    
   
}));

router.post('/', asyncHandler(async (req, res) => {
    const user = req.session.user
    const { name } = req.body
  
}));