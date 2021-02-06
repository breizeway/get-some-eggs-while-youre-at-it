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

// const changeList = async (tasks, user) => {
//   await Task.update(
//     {
//       updatedAt: new Date(),
//       listId: null
//     }, {
//       where: null
//     }

//   )
// }

module.exports = { byList }
