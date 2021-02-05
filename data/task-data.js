const { Task } = require('../db/models')


const byList = async (...listId) => {
    return await Task.findAll({
        where: {
          listId
        }
    });
}

const byID = async (listId) => {
  return await Task.findByPk(listId);
}


module.exports = { byList }
