const { todayIso } = require("../../helpers/date");
const { todayLocale } = require("../../helpers/date");

const homepageHandler = (req, reply) => {
    reply.send([{ message: 'ping success', code: 200 }, { date: todayLocale }]);
}

module.exports = { homepageHandler };