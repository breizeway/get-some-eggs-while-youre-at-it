const { List, Sequelize } = require('../db/models')

const byName = async (userId, name) => {
    const list = await List.findAll({
        where: {
            userId,
            name
        }
    })
    return list[0].id;
}

const all = async userId => {
    return await List.findAll({
        where: { userId },
        order: Sequelize.fn('lower', Sequelize.col('name'))
    });
}

const create = async (userId, name) => await List.create({ userId, name });

const remove = async id => {
    await List.delete({
        where: id
    });
}

module.exports = { byName, all, create, remove }