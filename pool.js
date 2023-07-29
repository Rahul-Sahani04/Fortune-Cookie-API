// ! VERCEL Connection
const { Client } = require('pg');

const connectionString = "postgres://default:Wd5aIoyO7RPE@ep-fragrant-cell-276327.ap-southeast-1.postgres.vercel-storage.com:5432/user_details";

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
