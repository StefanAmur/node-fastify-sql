// let student = require('../controller/student');
const { getStudentsSchema } = require('../controller/schemas/students').default;
const { getStudentsHandler } = require('../controller/handlers/students').default;


// const homepageOpts = {
//     schema: {
//         response: {
//             200: {
//                 type: 'array',
//                 items: {
//                     type: 'object',
//                     properties: {
//                         message: { type: 'string' },
//                         code: { type: 'integer' }
//                     }
//                 }
//             }
//         }
//     }
// }

// async function routes(fastify, options, done) {
//     fastify.get('/', function (request, reply) {
//         reply.send({ message: 'ping success', code: 200 })
//     });
//     fastify.get('/students', student.getStudentsList);
//     fastify.get('/students/:id', student.getStudentDetail);
// }


// const homepageOpts = {
//     schema: homepageSchema,
//     handler: homepageHandler,
// };

const getStudentsOpts = {
    schema: getStudentsSchema,
    handler: getStudentsHandler
}

const studentRoutes = (fastify, options, done) => {
    fastify.get('/api/students', getStudentsOpts);

    done();
};



// module.exports = routes;