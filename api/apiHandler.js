// api/apiHandler.js
const express = require('express');
const { getRandom } = require('../routes/getRandom');
const { ShowData } = require('../routes/ShowData');
const { addCookie } = require('../routes/add');
const { deleteCookie } = require('../routes/delete');

const app = express();

app.get('/api/cookie/random', getRandom);
app.get('/api/cookie', ShowData);
app.post('/api/cookie/add', addCookie);
app.delete('/api/cookie/:id', deleteCookie);

module.exports = {app};
