const { pool } = require('../pool');

const deleteUser = (request, response) => {
    const id = request.params.id;

    if (!id) {
        return response.status(400).json({ message: "User ID is required for deletion." });
    }

    pool.query('DELETE FROM info WHERE ID = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rowCount === 0) {
            return response.status(404).json({ message: "User not found." });
        }
        response.status(200).json({ message: "User deleted successfully." });
    });
};

module.exports = {
    deleteUser,
};
