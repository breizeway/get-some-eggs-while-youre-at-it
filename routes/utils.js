const csrf = require('csurf');
const { validationResult } = require('express-validator')
const csrfProtection = csrf({ cookie: true });
const { taskData, listData, noteData } = require('../data')
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map((error) => error.msg);

        const err = Error("Bad request.");
        err.errors = errors;
        err.status = 400;
        err.title = "Bad request.";
        return next(err);
    }
    next();
};

const convertListData = (listData) => {
    return listData.map(list => ({
        id: list.id,
        htmlId: `list_${list.id}`,
        deleteHtmlId: `list_delete_${list.id}`,
        name: list.name,
        href: `/lists/${list.id}`
    }));
}

const convertTaskData = taskData => {
    return taskData.map(task => ({
        htmlId: `task_${task.id}`,
        id: task.id,
        name: task.name,
        deleteHtmlId: `task_delete_${task.id}`,
        href: `/tasks/${task.id}`,
        searchHref: `/lists/${task.listId}`,
        listId: task.listId
    }));
}

const destroyNotes = async listId => {
    const tasks = await taskData.byList(listId);
    if(tasks.length) {
        tasks.forEach(async task => {
        const notes = await noteData.allNotes(task.id);

            if (notes.length){
                notes.forEach(async note => {
                await noteData.destroyNote(note.id)
                })
            }
        })
    } else {
        return;
    }
}

const destroyTasks = async listId => {
    const tasks = await taskData.byList(listId);
    if(tasks.length) {
        tasks.forEach(async task => {
        const notes = await taskData.destroyTask(task.id)
        })
    } else {
        return;
    }
}


module.exports = {
    asyncHandler,
    csrfProtection,
    handleValidationErrors,
    convertListData,
    convertTaskData,
    destroyNotes,
    destroyTasks
 };
