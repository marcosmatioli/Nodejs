const express = require('express')

const app = express()
const port = 3000 // variavel de ambiente

//função anonima req = requisição e res = resposta para o usuario
app.get('/', (req,res) => {
    res.send('Olá Mundo!')
})

app.listen(port, () =>{
    console.log(`App rodando na porta ${port}`)
} )