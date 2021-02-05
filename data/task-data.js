const { Task } = require('../db/models')


const byList = async (...listId) => {
    return await Task.findAll({
        where: {
          listId
        }
    });
}

const create = async (name, listId) => await Task.create({ name, listId});



module.exports = { byList }
