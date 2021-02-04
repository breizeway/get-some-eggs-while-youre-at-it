const { List } = require('../db/models')

const byName = async (userId, name) => {
    return await List.findAll({
        where: {
            userId, name,
        }
    })
}

const all = async (userId) => {
    return await List.findAll({
        where: {
            userId
        }
    })
}
module.exports = { byName, all }