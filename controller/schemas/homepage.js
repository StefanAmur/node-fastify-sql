const { todayIso, todayLocale } = require('../../helpers/date');

const homepageSchema = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    code: { type: 'integer' },
                    date: { todayLocale }
                },
            },
        },
    },
}

module.exports = { homepageSchema };