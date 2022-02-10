const studentsModel = require('../models/studentsModel')

async function getStudentsList(request, reply) {
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
    const studentsData = await studentsModel.studentsList(queryParams);

    var response = { page: page, per_page: limit, data: studentsData[0] }
    return reply.status(200).send(response);
}

async function getStudentDetail(request, reply) {
    const studentData = await studentsModel.studentDetail(request.params.id);
    if (studentData.length > 0) {
        return reply.status(200).send({ data: studentData[0] });
    } else {
        return reply.status(500).send({ error: "Student Not found!" });
    }
}

module.exports = {
    getStudentsList,
    getStudentDetail
};