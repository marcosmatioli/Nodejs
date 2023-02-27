const chalk = require('chalk')

const nota = 5

if(nota >= 7){
    console.log(chalk.green('Parabens você foi aprovado!'))
}else{
    console.log(chalk.red('Recuperação'))
}
//só está funcionando na versão 4.1.2 do chalk