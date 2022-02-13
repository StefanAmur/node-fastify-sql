const { getStudentsSchema, getStudentSchema, addStudentSchema } = require('../controller/schemas/students.js');
const { getStudentsHandler, getStudentHandler, addStudentHandler } = require('../controller/handlers/students.js');

const getStudentsOpts = {
    schema: getStudentsSchema,
    handler: getStudentsHandler,
};

const getStudentOpts = {
    schema: getStudentSchema,
    handler: getStudentHandler,
};

const addStudentOpts = {
    schema: addStudentSchema,
    handler: addStudentHandler,
};

const routes = (fastify, options, done) => {
    fastify.get('/', function (request, reply) {
        reply.send({ message: 'ping success', code: 200 })
    })
    fastify.get('/students', getStudentsOpts);
    fastify.get('/students/:id', getStudentOpts);
    fastify.post('/students', addStudentOpts);

    done();
}

module.exports = routes;