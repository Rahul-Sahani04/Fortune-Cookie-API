const { pool } = require('../pool');
const getRandom = (request, response) => {
    
    pool.query('SELECT * FROM fortune_messages ORDER BY random() LIMIT 1', (error, results) => {
        if (error) {
            throw error;
        }
        response.send(results.rows);
    });
};

module.exports = {
    getRandom,
};
