const { createReadStream } = require('fs');

//const stream = createReadStream("./content/big.txt", {highWaterMark: 90000})
const stream = createReadStream("./content/big.txt", {highWaterMark:90000, encoding: "utf8"})

// default 64kb
// last buffer - reaminder
// highWatermark - control size
// 

stream.on('data', (result) =>{
    console.log(result);
})