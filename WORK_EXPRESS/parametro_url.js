const express = require('express')
const { networkInterfaces } = require('os')
const app = express()
const port = 3000 // variavel de ambiente

const path = require('path')

const basePath = path.join(__dirname, 'templates') // basepath

const checkAuth = function (req, res, next) {

    req.authStatus = true
    if (req.authStatus) {
        console.log('Está logado, pode continuar!')
        next()
    } else {
        console.log("Não está logado, faça o login para continuar")
        next()
    }
}
app.use(checkAuth)

//função anonima req = requisição e res = resposta para o usuario
app.get('/users/:id', (req, res) => {

    const id = req.params.id
    //leitura da tabela users no banco de dados
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`) // redireciona para o outro html que está dentro do template que está no basePath que a gente colocou ali
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})

//o nodemon atualiza a pagina em tempo real e não precisa ficar fechando o projeto toda hora basta adicionar com npm nodemon