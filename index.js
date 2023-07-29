const express = require('express');
const search = require('./routes/getRandom');
const users = require('./routes/ShowData');
const add = require('./routes/add')
const deleteCookie = require('./routes/delete')

port = 8000
const app = express()
app.use(express.json());
app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})
app.get('/cookie', users.ShowData)
app.get('/cookie/random', search.getRandom);
app.post('/cookie/add', add.addCookie)
app.delete('/cookie/:id', deleteCookie.deleteCookie)
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})