'use strict'
require('dotenv').config();
const fastify = require('fastify')({ logger: true })
const routes = require('./routes/students')
fastify.register(routes);
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await fastify.listen(PORT);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

startServer();