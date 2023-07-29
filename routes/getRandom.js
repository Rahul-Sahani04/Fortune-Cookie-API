const { pool } = require('../pool');

const searchUser = (request, response) => {

    pool.query('SELECT * FROM fortune_messages ORDER BY random() LIMIT 1', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

module.exports = {
    searchUser,
};
