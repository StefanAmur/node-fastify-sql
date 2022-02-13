const mysqlPromise = require('../config/database');

const studentsModel = {
    studentsList: async function () {
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

    addStudent: async function (name, email, classId) {
        const connection = await mysqlPromise.DATABASE.getConnection();
        var res = [{}];

        try {
            res = await connection.execute(`INSERT INTO Student(name, email, class_id) VALUES(?, ?, ?)`, [name, email, classId]);
            connection.release();
        }
        catch (err) {
            console.error(err)
            connection.release();
            return false
        }

        return res[0].insertId;
    },
}

module.exports = studentsModel;