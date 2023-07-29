const express = require('express');
const search = require('./routes/getRandom');
const users = require('./routes/ShowData');
const add = require('./routes/add')
const deleteUser = require('./routes/delete')
// const update = require('./routes/update')

port = 8000
const app = express()
app.use(express.json());
app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})
app.get('/cookie', users.getUsers)
app.get('/cookie/random', search.searchUser);
app.post('/cookie/add', add.addUsers)
// app.post('/users/:id', update.updateUser)
app.delete('/cookie/:id', deleteUser.deleteUser)
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})