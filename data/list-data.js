const { List } = require('../db/models')

const byName = async (userId, name) => {
    const list = await List.findAll({
        where: {
            userId,
            name
        }
    })
    return list[0].id;
}

const all = async userId => await List.findAll({ where: { userId }, order: ['name'] });

const create = async (userId, name) => await List.create({ userId, name });

module.exports = { byName, all, create }
