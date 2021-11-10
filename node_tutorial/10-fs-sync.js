const {readFileSync, writeFileSync} = require("fs")
console.log("start")
const first = readFileSync("./content/first.txt","utf8")
const second = readFileSync("./content/second.txt","utf8")

console.log(first)
console.log(second)

writeFileSync("./content/result.txt",`Here is the result: ${first}`, {flag: "a"})
console.log("done")
console.log("start next one")