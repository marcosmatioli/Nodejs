const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () =>{
    console.log("Durante")
})

console.log("Antes")

eventEmitter.emit('start') // inicia o event e começa a fazer as funções que devem ser feitas

console.log("Depois")
