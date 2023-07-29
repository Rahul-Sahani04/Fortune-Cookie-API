const express = require('express');
const apiHandler = require('./api/apiHandler');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.json({
    info: 'Node.js, Express, and Postgres API',
  });
});

// Use the API routes defined in apiHandler
app.use(apiHandler);

module.exports = { app };
