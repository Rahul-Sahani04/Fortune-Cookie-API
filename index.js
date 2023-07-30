const express = require('express');
const {addCookie} = require('./routes/add')
const {deleteCookie} = require('./routes/delete')
const {getRandom} = require('./routes/getRandom')
const {ShowData} = require('./routes/ShowData')

const app = express();
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000


app.get("/", (req, res) => {
    res.json({ page: "Main page!", info: 'Node.js, Express, and Postgres API', availableRoutes: ["/cookie/all", "/cookie/random", "/cookie/add"] });
});

app.get('/cookie/all', ShowData)
app.get('/cookie/random', getRandom)
app.post('/cookie/add', addCookie)
app.delete('/cookie/:id', deleteCookie)


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = { app };
