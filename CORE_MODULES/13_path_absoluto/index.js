const path = require("path")

//path absoluto
console.log(path.resolve('teste.txt')) // o comando traz o arquivo inteiro do caminho do arquivo em questão

//formar path

const midfolder = 'relatorios'
const filename = 'marcos.txt'

const finalpath = path.join("/", 'arquivos',midfolder,filename) // formar um final path para encontrar um arquivo

console.log(finalpath)