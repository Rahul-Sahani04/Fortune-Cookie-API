// pool.js
const { Client } = require('pg');
require('dotenv').config();


const pool = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

module.exports = { pool };
