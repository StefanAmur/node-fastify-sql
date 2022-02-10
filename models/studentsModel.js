const mysqlPromise = require('../config/database');

const studentsModel = {
    studentsList: async function (params) {
        const connection = await mysqlPromise.DATABASE.getConnection();
        var res = [{}];

        try {
            res = await connection.execute(`SELECT * FROM student`);
            connection.release();
        }
        catch (err) {
            console.error(err)
            connection.release();
            return false
        }
        return res.length > 0 ? res : null;
    },
    studentDetail: async function (id) {
        const connection = await mysqlPromise.DATABASE.getConnection();
        var res = [{}];

        try {
            res = await connection.execute(`SELECT * FROM student WHERE id = ?`, [id]);
            connection.release();
        }
        catch (err) {
            console.error(err)
            connection.release();
            return false
        }
        return res.length > 0 ? res[0] : null;
    },
}

module.exports = studentsModel;