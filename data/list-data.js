const { List } = require('../db/models')

const byName = async (userId, name) => {
    const list = await List.findAll({
        where: {
            userId,
            name,
        }
    })
    return list[0].id;
}

const all = async (userId) => {
    return await List.findAll({
        where: {
            userId
        }
    })
}
module.exports = { byName, all }
