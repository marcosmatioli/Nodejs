//nome do modulo é o nome da variavel
//import, basicamente é um import i é uma constant para que ele não mude ao decorrer do programa
const fs = require('fs') // file system

//arrow function
fs.readFile('arquivo.txt', 'utf8', (err, data) => {

    if (err) {
        console.log(err)
    }
    console.log(data)
})