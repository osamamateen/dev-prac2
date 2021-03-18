const { create, getOne, getAll } = require('./posts.action');

module.exports = {
    '/': {
        post: {
            action: create,
            level: 'public'
        },
        get: {
            action: getAll,
            level: 'public'
        }
    },
    '/:id': {
        get: {
            action: getOne,
            level: 'public'
        }
    }
};