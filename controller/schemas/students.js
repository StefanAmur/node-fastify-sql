
const getStudentsSchema = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    code: { type: 'integer' },
                },
            },
        },
    },
}

module.exports = { getStudentsSchema };