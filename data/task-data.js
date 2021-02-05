const { Task } = require('../db/models')


const byList = async (...listId) => {
    return await Task.findAll({
        where: {
          listId
        }
    });
}

const byID = async (taskId) => {
  return await Task.findByPk(taskId)
}


const create = async (listId, name) => await Task.create({ listId, name });
module.exports = { byList }
