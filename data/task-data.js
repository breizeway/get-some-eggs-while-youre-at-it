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

const create = async (userId, name, listId) => await Task.create({userId, name, listId});


const destroyTask = async id => await Task.destroy({ where: { id } });


module.exports = { byList, create, byId, destroyTask }
