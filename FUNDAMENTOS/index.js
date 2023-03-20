const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
    {name: 'name', message : 'Digite seu nome'},
    {name: 'age', message : 'Digite sua idade'},
]).then((answers) =>{

    if(!answers.name || !answers.age){
        throw new Error("Nome e idade são obrigatórios!")
    }
    try{
        console.log(chalk.bgYellow.black(`Nome: ${answers.name} e idade: ${answers.age}`))
    }catch{
        console.log(error)
    }
}).catch(err => console.log(err))