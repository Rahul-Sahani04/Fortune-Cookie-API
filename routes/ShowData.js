const { pool } = require('../pool');

const getUsers = (request, response) => {
    // pool.connect(); // <---- Use in VERCEL
    pool.query('select * from fortune_messages', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
}