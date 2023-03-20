const path = require('path')

const customPath = "/relatorio/marcos/relatorio1.pdf"

console.log(path.dirname(customPath)) // traz o nome do diretorio do local do arquivo
console.log(path.basename(customPath)) // base name é o nome do arquivo em questão base (RELATORIO1.PDF)
console.log(path.extname(customPath)) // a EXTENSÃO DO ARQUIVO .PDF