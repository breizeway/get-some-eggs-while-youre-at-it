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

const byId = async (listId) => {
    return await List.findByPk(listId)
  }

const all = async userId => {
    const list = await List.findAll({
        where: { userId },
        order: Sequelize.fn('lower', Sequelize.col('name'))
    });
    for (let i = 0; i < list.length; i++) {
        if (list[i].dataValues.name === 'Inbox') {
            const inbox = { dataValues, _previousDataValues, _changed, _modelOptions, _options, isNewRecord } = list[i];
            list.splice(i, 1)
            list.unshift(inbox)

        }
    }
    return list
}

// const byId = async id => {
//     const list = await List.findAll({
//         where: { id }
//     })
//     return list[0];
// }

const create = async (userId, name) => await List.create({ userId, name });

const destroy = async id => await List.destroy({ where: { id }});


module.exports = { byName, all, create, destroy, byId }
