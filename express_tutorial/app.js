const express = require('express');
const app = express()

const { products } = require('./data.js');
app.get('/', (req, res) =>{
    res.json(products)
    // res.writeHead(200,"OK", {"content-type": "application/json"})
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000... ");
})