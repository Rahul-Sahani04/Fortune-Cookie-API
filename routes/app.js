const express = require('express');
const app = express();
const { pool } = require('../pool');
app.use(cors())
// GET RANDOM FROM DATABASE
async function getRandomCookieMessage() {
  try {
    const queryResult = await pool.query('SELECT message FROM fortune_messages');
    return queryResult;
  } catch (error) {
    console.error('Error retrieving data from the database:', error);
    return 'Error: Could not retrieve fortune message.';
  }
}

// Get RANDOM
app.get('/api', async (req, res) => {
  const randomMessage = await getRandomCookieMessage();
  console.log(randomMessage);
  res.status(200).json({
    message: randomMessage,
  });
});

// INSERT
app.post('/api/insert/:message', async (req, res) => {
  const message = req.params.message;

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    await pool.query('INSERT INTO fortune_messages (message) VALUES ($1)', [message]);
    res.status(201).json({ message: 'Fortune message added successfully.' });
  } catch (error) {
    console.error('Error inserting data into the database:', error);
    res.status(500).json({ error: 'Failed to add the fortune message.' });
  }
});

module.exports = {app};

