const _ = require('lodash')
const chalk = require('chalk')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a,b) // diferença entre os dois arrays

console.log(chalk.bgRed.bold(diff)) //imprime BG vermelho

//então basicamente a gente usa o npm install ele ja instala todos os modulos que tem no packjson então se alguem ja usou ele só importa tudo
// npm install --save-dev basicamente ele salva o ambiente para ser utilizado offline