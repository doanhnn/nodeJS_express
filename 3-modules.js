// CommonJS, every file is module
// module - encapsulation code, share minium

const names = require("./4-name")
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavor")
require("./7-mind-grenade")

console.log(data)

sayHi.sayHi(names.doanh)
sayHi.sayHii(names.nguyen)
data.sayHiii("Nguyen Ngoc Doanh")