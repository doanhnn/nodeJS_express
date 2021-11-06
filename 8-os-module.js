const os = require('os')

// user info
console.log(os.userInfo())

// method returns the systm uptime in seconds
console.log(os.uptime())

// current OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS)