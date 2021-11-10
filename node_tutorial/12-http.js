const http = require("http")

const server = http.createServer((req,res) => {
    //console.log(req)
    if(req.url === '/'){
        res.end("Welcome to our home page !")
    }
    if(req.url === '/about'){
        res.end("This is our short story !")
    }
    res.end(`
    <h1>Opps</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href = "/">Back home</a>
    `)
})

server.listen(5000)