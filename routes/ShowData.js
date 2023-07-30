const { pool } = require('../pool');

const ShowData = (request, response) => {
    // pool.connect(); // <---- Use in VERCEL
    pool.query('select * from fortune_messages', (error, results) => {
        postData = JSON(results.rows)
        if (error) {
            throw error
        }
        // response.status(200).json(results.rows)
        response.send(results.rows);
    })
}


module.exports = {
    ShowData,
}