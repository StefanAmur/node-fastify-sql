const { studentsList, studentDetail, addStudent } = require('../../models/studentsModel');

async function getStudentsHandler(request, reply) {
    var limit = 20;
    var offset = 0;
    var page = 1;

    if (typeof request.query.limit !== "undefined") {
        if (parseInt(request.query.limit) > 0) {
            limit = parseInt(request.query.limit);
        }
    }

    if (typeof request.query.page !== "undefined") {
        if (parseInt(request.query.page) > 0) {
            page = parseInt(request.query.page);
            offset = (page - 1) * limit
        }
    }

    var queryParams = { offset: offset, limit: limit }
    const studentsData = await studentsList(queryParams);

    var response = { page: page, per_page: limit, data: studentsData[0] }
    return reply.send(response);
}

async function getStudentHandler(request, reply) {
    const studentData = await studentDetail(request.params.id);
    if (studentData.length > 0) {
        return reply.status(200).send({ data: studentData[0] });
    } else {
        return reply.status(500).send({ error: "Student Not found!" });
    }
}

async function addStudentHandler(request, reply) {
    const { name, email, classId } = request.body;
    const studentData = await addStudent(name, email, classId);
    if (studentData > 0) {
        return reply.status(200).send({ data: studentData });
    } else {
        return reply.status(500).send({ error: "Student Not added!" });
    }
}

module.exports = {
    getStudentsHandler,
    getStudentHandler,
    addStudentHandler,
};