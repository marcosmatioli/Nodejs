//modulos do node
const http = require("http")
const fs = require('fs')
const url = require("url");

const port = 3000

const server = http.createServer((req, res) => {
    var urlInfo = require('url').parse(req.url, res, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader( 'Content-Type' , 'text/html' )

    if(!name){
        fs.readFile("index.html", function (err, data) {
            res.writeHead(200, { "Content-Type" : "text/html" })
            res.write(data)
            return res.end() // finaliza a ação do servidor
        })
    }else{
        const nameNewLine = name + "\r\n" //basicamente quebra linha um para o linux e outro para o linux
        //appendFile ele atualiza o arquivo
        fs.appendFile("Arquivo.txt", nameNewLine, function(err,data){
            res.writeHead(302, {
                Location : "/",
            })
        res.end()
        })
    }
})
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})