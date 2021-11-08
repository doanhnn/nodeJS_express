const EventEmitter = require("events")

const customEventEmitter = new EventEmitter()

customEventEmitter.on('response', (name, id) => {
    console.log(`Data received ${name} and ${id}`)
})

customEventEmitter.on('response', ()=> {
    console.log("Data received 2")
})

customEventEmitter.emit('response', 'doanhnn', 21)