const { Task, Note} = require('../db/models');


const allNotes = async taskId => {
    return await Note.findAll({
        where: { taskId },
    });
}

const createNote = async (taskId, note, userId) =>{
   return await Note.create({ userId, taskId, note });
}

const destroyNote = async id => await Note.destroy({ where: { id }});

module.exports = { allNotes, createNote, destroyNote }
