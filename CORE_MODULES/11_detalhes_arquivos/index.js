const fs = require('fs')

fs.stat('arquivo.txt', (err, stats)=>{
    if(err){
        console.log(err)
    }
    console.log(stats.isFile()) // se é um arquivo
    console.log(stats.isDirectory()) // é um diretório 
    console.log(stats.isSymbolicLink()) // não é um link
    console.log(stats.ctime) // quando foi criado
    console.log(stats.size) // o tamanho dele em bytes
})