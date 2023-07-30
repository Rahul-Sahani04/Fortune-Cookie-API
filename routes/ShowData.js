const { pool } = require('../pool');

const ShowData = (request, response) => {
    // pool.connect(); // <---- Use in VERCEL
    pool.query('SELECT * FROM fortune_messages', (error, results) => {
        if (error) {
            throw error
        }
        response.send(results.rows);
    })
}


module.exports = {
    ShowData,
}