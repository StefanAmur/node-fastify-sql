let student = require('../controller/student');

async function routes(fastify, options) {
    fastify.get('/', function (request, reply) {
        reply.send({ message: 'ping success', code: 200 })
    })
    fastify.get('/students', student.getStudentsList);
    fastify.get('/students/:id', student.getStudentDetail);
    fastify.post('/students', student.addStudent);
}

module.exports = routes;