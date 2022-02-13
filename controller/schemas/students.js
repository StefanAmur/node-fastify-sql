const student = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        email: { type: 'string' },
        classId: { type: 'number' },
    },
};

const getStudentsSchema = {
    response: {
        200: {
            type: 'array',
            items: student,
        },
    },
};

const getStudentSchema = {
    params: {
        id: { type: 'number' },
    },
    response: {
        200: student
    },
};

const addStudentSchema = {
    body: {
        type: 'object',
        required: ['name', 'email', 'classId'],
        properties: {
            name: { type: 'string' },
            email: { type: 'string' },
            classId: { type: 'number' },
        },
    },
    response: {
        200: { type: 'string' }, // sending a simple message as string
    },
};

module.exports = { getStudentsSchema, getStudentSchema, addStudentSchema };