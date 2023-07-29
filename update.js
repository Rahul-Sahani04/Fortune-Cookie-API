const { pool } = require('../pool');

const updateUser = (request, response) => {
    const id = request.params.id;
    // const firstName = request.query.firstName;
    // const lastName = request.query.lastName;
    // const email = request.query.email;
    // const age = request.query.age;

    const { firstName, lastName, email, age } = request.body;

    if (!id) {
        return response.status(400).json({ message: "ID parameter is required for updating." });
    }

    const updateFields = [];
    const values = [];

    if (firstName) {
        updateFields.push('first_name');
        values.push(firstName);
    }

    if (lastName) {
        updateFields.push('last_name');
        values.push(lastName);
    }

    if (email) {
        updateFields.push('email');
        values.push(email);
    }

    if (age) {
        updateFields.push('age');
        values.push(age);
    }

    if (updateFields.length === 0) {
        return response.status(400).json({ message: "No valid parameters provided for updating." });
    }

    const updateQuery = `UPDATE info SET ${updateFields.map((field, index) => `${field} = $${index + 1}`)} WHERE id = $${updateFields.length + 1}`;
    // console.log(updateQuery)
    pool.query(updateQuery, [...values, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json({ message: "Successfully Updated." });
    });
};

module.exports = {
    updateUser
};
