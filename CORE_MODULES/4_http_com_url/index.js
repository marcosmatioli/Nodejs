const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {

    const urlinfo = require('url').parse(req.url, true)
    const name = urlinfo.query.name

    res.statusCode = 200 // responde que foi bem sucedido
    res.setHeader('Content-Type', 'text/html')

    if(!name){
        res.end('<h1>Preencha o seu nome:</h1> <form method="GET"><input type="text" name="name"/> <input type="submit" value="Enviar"/></form>')
    }
    else{
        console.log(name) //basicamente posso receber a resposta do usuario a fim de testar isso
        res.end(`<h1>Seja bem-vindo: ${name}</h1>`)
    }

})
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})