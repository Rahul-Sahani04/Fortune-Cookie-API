const { pool } = require('../pool');
// const express = require('express');
// const router = express.Router();
const getRandom = (request, response) => {
    
    pool.query('SELECT * FROM fortune_messages ORDER BY random() LIMIT 1', (error, results) => {
        if (error) {
            throw error;
        }
        // var postData = results.rows;
        // console.log(postData);
        
        response.send(results.rows);
    });
};


// router.get("/cookie/random", (req, res) => {
//     console.log("SENDING")
//     res.send(postData);
//   });

module.exports = {
    getRandom,
};
