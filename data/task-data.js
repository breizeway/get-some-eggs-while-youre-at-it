const { Task, List } = require('../db/models/')


const byList = async list => {
    return await Task.findAll({
        include: List
    })
}

console.log(byList('Inbox'))