const express = require('express');
const app = express()

app.get('/', (req, res) =>{
    res.json([{"name":"doanhnn","home":"home"}])
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000... ");
})