const customers = require('./customers/customers.json')
const data = customers

const express = require('express')
const app = express()
const port = 5000

//app.get('/api/v1/customers', (req, res) => res.send(data))
app.get('/api/v1/customers', cors(), (req, res, next) => {
    res.json(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))