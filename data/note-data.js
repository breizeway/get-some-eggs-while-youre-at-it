const { Task, Note} = require('../db/models');


const allNotes = async taskId => {
    return await Note.findAll({
        where: { taskId },
    });
}

const createNote = async (taskId, note, userId) =>{
   return await Note.create({ userId, taskId, note });
}

module.exports = { allNotes, createNote }
