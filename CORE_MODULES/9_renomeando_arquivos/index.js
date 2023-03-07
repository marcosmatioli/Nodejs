const fs = require("fs")

const arquivoantigo = "arquivo.txt"
const novoartigo = "novoartigo.txt"

fs.rename(arquivoantigo,novoartigo, function(err){
    if(err){
        console.log(err)
        return
    }else{
        console.log(`o arquivo ${arquivoantigo} foi renomeado para ${novoartigo}.`)
    }
})