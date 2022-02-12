const fastify = require('fastify')({ logger: true })
const homepageRoute = require('./routes/homepage')
fastify.register(homepageRoute);
module.exports = fastify