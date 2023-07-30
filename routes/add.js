const { pool } = require('../pool');

const addCookie = (request, response) => {
    const { message } = request.body;

    if (!message) {
        return response.send({ message: "Message field is required." });
      }

    pool.query("INSERT INTO fortune_messages (message) VALUES ($1);", [message], (error, results) => {
        if (error) {
            throw error;
        }
        // response.status(200).json({ message: "User Successfully added to Database",});
        response.send(results.rows);
    });
};

module.exports = {
    addCookie,
};
