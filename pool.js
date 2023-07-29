// ! VERCEL Connection
const { Client } = require('pg');

// app.js
require('dotenv').config();

const {connectionString} = process.env;

const pool = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

pool.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

module.exports = { pool };
