// api/apiHandler.js
const express = require('express');
const router = express.Router(); // Use Express Router

const { getRandom } = require('../routes/getRandom');
const { ShowData } = require('../routes/ShowData');
const { addCookie } = require('../routes/add');
const { deleteCookie } = require('../routes/delete');

// Define the routes using the router
router.get('/api/cookie/random', getRandom);
router.get('/api/cookie', ShowData);
router.post('/api/cookie/add', addCookie);
router.delete('/api/cookie/:id', deleteCookie);

module.exports = {router};
