const { readFile, writeFile } = require("fs").promises
const { result } = require("lodash")
const util = require("util")
//const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile("./content/first.txt","utf8")
        await writeFile("./content/result-mind-grenade.txt",first,"utf8")
        console.log(first)        
    } catch (error) {
        console.log(error)
    }
}

start()

// readFile("./content/first.txt","utf8")
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

// const getText = (path) => {
//     return new Promise((resolver,reject) => {
//         readFile(path,"utf8",(err,data) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolver(data)
//             }
//         })
//     })
// }

// getText("./content/first.txt")
// .then((result) => console.log(result))
// .catch((err) => console.log(err))