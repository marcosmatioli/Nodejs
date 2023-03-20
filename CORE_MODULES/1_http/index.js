const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {

    res.write('Oi HTTP')
    res.end() // finaliza a resposta

})
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
//basicamente ele cria um servidor e para parar ele precisa usar o CTRL+C então aqui é para vc criar servidor e testar as coisas nele.