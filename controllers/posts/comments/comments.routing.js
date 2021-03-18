const { create } = require('./comments.action');

module.exports = {
    '/:id': {
        post: {
            action: create,
            level: 'public'
        }
    }
};