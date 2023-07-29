const { Pool } = require('pg');

const pool = new Pool({
    user: 'rsahani',
    host: 'localhost',
    database: 'rsahani',
    password: '',
    port: 5432,
  });

module.exports = {pool};