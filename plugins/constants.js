'use strict';

const fp = require('fastify-plugin');


function constants (fastify, options, next) {
    fastify.decorate('constants', Object.freeze({
        REFERENCES: {
            TODO_LIST: 'todo_list',
            TODO_LIST_COLLABORATIVE: 'todo_list/collaborative',
            TODO_LIST_PERSONAL: 'todo_list/personal',
            TODO: 'todo'
        }
    }));
    next();
}

module.exports = fp(constants);