const express = require('express')
const router = express.Router

const app = express()
const port = 3000 // variavel de ambiente

const path = require('path')

const userRouter = require('/users')

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

const basePath = path.join(__dirname, 'templates') // basepath

app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/users.html`) // redireciona para o outro html que está dentro do template que está no basePath que a gente colocou ali
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})


//o nodemon atualiza a pagina em tempo real e não precisa ficar fechando o projeto toda hora basta adicionar com npm nodemon