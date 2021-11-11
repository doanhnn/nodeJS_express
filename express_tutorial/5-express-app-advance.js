const express = require('express');
const app = express()

const { products } = require('./data.js');
app.get('/', (req, res) =>{
    // res.json(products)
    // res.writeHead(200,"OK", {"content-type": "application/json"})
    res.write('<h1>Home page</h1><a href="/api/products">Products</a>')
})

// app.get('/api/products', (req, res)=>{
//     const newProducts = products.map((products) => {
//         const {id, name, image} = products
//         return {id, name, image}
//     })
//     res.json(newProducts)
// })

app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send("Product does not exist")
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params);
    res.send("Hello world !!!")
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const {name, limit} = req.query
    let sortedProducts = [...products]

    if(name){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(name)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        res.status(200).send("No item matched your search")
    }
    res.status(200).send(sortedProducts)
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000... ");
})