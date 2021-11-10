const { readFile } = require("fs")
const { result } = require("lodash")

console.log("Start")
readFile("./content/first.txt","utf8", (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log("Done")
})

console.log("Start next one")