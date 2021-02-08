const { Task, User } = require('../db/models')
const { Sequelize } = require('../db/models');
const Op = Sequelize.Op;


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

const userById = async (userId) => {
  return await User.findByPk(userId)
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

const searchTasks = async (searchPhrase, userId) => {
  return await Task.findAll({
    where: {
      [Op.and]: [
        { name: { [Op.iLike]: `%${searchPhrase}%`} },
        { userId },
      ]
    }
  });

}

const create = async (userId, name, listId) => await Task.create({userId, name, listId});


const destroyTask = async id => await Task.destroy({ where: { id } });


module.exports = { byList, create, byId, destroyTask, searchTasks, userById }
