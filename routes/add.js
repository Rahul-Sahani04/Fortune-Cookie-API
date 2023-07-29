const { pool } = require('../pool');

const addUsers = (request, response) => {
    // const firstName = request.query.firstName;
    // const lastName = request.query.lastName;
    // const email = request.query.email;
    // const age = request.query.age;
    const { firstName, lastName, email, age } = request.body;

    if (!firstName || !lastName || !email || !age) {
        return response.status(400).json({ message: "All fields are required." });
      }

    pool.query("INSERT INTO info (first_name, last_name, email, age) VALUES ($1, $2, $3, $4);", [firstName, lastName, email, age], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json({ message: "User Successfully added to Database",});
    });
};

module.exports = {
    addUsers,
};
