const express = require('express')
const router = express.Router

const path = require('path')

const basePath = path.join(__dirname, 'templates') // basepath

router.get('/add',(req,res) => {
    res.sendFile(`${basePath}/userform.html`)
} )

router.post('/save', (req,res)=>{

    console.log(req.body)

    const name = req.body.name
    const age = req.body.idade

    console.log(`O nome do usuário é: ${name} e ele tem ${age}.`)
})

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
router.use(checkAuth)

//função anonima req = requisição e res = resposta para o usuario
router.get(':id', (req, res) => {

    const id = req.params.id
    //leitura da tabela users no banco de dados
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`) // redireciona para o outro html que está dentro do template que está no basePath que a gente colocou ali
})

module.exports = router