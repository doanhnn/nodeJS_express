const express = require('express');
const app = express()
const morgan = require('morgan')
const logger = require('./logger');
const authorize = require('./authorize');
// req => middleware => res

// use vs route
// option - your own / express / third party

// app.use([logger, authorize])
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send("Home page")
})

app.get('/about', (req, res) => {
    res.send("About page")
})

app.get('/api/products', (req, res) => {
    res.send("Products")
})

app.get('/api/items', (req, res)=> {
    res.send("Items")
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
})