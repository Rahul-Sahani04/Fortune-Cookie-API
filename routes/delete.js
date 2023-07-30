const { pool } = require('../pool');

const deleteCookie = (request, response) => {
    const id = request.params.id;

    if (!id) {
        return response.send({ message: "Cookie ID is required for deletion." });
    }

    pool.query('DELETE FROM fortune_messages WHERE ID = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rowCount === 0) {
            return response.send({ message: "User not found." });
        }
        // response.status(200).json({ message: "User deleted successfully." });
        response.send(results.rows);
    });
};

module.exports = {
    deleteCookie,
};
