const http = require('http')

// const server = http.createServer((req, res) =>{
//     console.log(req)
//     res.end("Hello")
// })

// using event emitter API
const server = http.createServer()
// emits request  event
// subscribe to it / listen for it /response to it
server.on('request', (req, res) => {
    //res.write(req)
    console.log(req)
    res.end("Hello")
})

server.listen(5000)