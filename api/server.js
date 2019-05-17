const customers = require('./customers/customers.json')
const data = customers

const express = require('express')
const app = express()

var cors = require('cors')

app.use(cors())
app.get('/api/v1/customers', cors(), (req, res, next) => { //test cors
    res.json(data)
})

app.listen(5000, function () {
    console.log('haduken')
})