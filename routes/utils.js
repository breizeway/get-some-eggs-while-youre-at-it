const csrf = require('csurf');
const { validationResult } = require('express-validator')
const csrfProtection = csrf({ cookie: true });
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

const convertListData = listData => {
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
        href: `/tasks/${task.id}`
    }));
}


module.exports = { asyncHandler, csrfProtection, handleValidationErrors, convertListData, convertTaskData };
