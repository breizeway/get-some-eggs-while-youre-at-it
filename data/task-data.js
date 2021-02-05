const { Task } = require('../db/models')


const byList = async (...listId) => {
    return await Task.findAll({
        where: {
          listId
        }
    });
}

const create = async (listId, name) => await Task.create({ listId, name });
module.exports = { byList }
