const { homepageSchema } = require('../controller/schemas/homepage');
const { homepageHandler } = require('../controller/handlers/homepage');

const homepageOpts = {
    schema: homepageSchema,
    handler: homepageHandler,
};

// const getStudentsOpts = {
//     schema: getStudentsSchema,
//     handler: getStudentsHandler
// }

const homepageRoute = (fastify, options, done) => {
    fastify.get('/', homepageOpts);
    // fastify.get('/api/students', getStudentsOpts)

    done();
};



module.exports = homepageRoute;

// async function routes(fastify, options) {
//     fastify.get('/', async (request, reply) => {
//         return { hello: 'world' }
//     })
// }

// module.exports = routes