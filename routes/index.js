let student = require('../controller/student');

async function routes(fastify, options) {
    fastify.get('/', function (request, reply) {
        reply.send({ message: 'ping success', code: 200 })
    })
    fastify.get('/students', student.getStudentsList);
    fastify.get('/student/:id', student.getStudentDetail);
}

module.exports = routes;