const { Task } = require('../db/models')


const byList = async (...listId) => {
    return await Task.findAll({
        where: {
          listId
        }
    });
}

const byId = async (taskId) => {
  return await Task.findByPk(taskId)
}


<<<<<<< HEAD
const create = async (listId, name) => await Task.create({ listId, name });
module.exports = { byList, byId, create }
=======
const create = async (userId, name, listId) => await Task.create({userId, name, listId});


module.exports = { byList, create }
>>>>>>> main
