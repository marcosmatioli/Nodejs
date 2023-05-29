//modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//modulos internos
const fs = require('fs')
const {
    create
} = require('domain')
const {
    get
} = require('http')


operations()

function operations() {
    inquirer.prompt([{
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair',
            ],
        }, ]).then((answer) => {

            const action = answer['action']

            if (action === 'Criar Conta') {
                createAccount()
            } else if (action === 'Depositar') {
                deposit()
            } else if (action === 'Consultar Saldo') {
                getAccountBalance()
            } else if (action === 'Sacar') {
                withdraw()
            } else if (action === 'Sair') {
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
                process.exit()
            }
        })
        .catch((err) => console.log(err))
}

//create an account for user

function createAccount() {
    console.log(chalk.bgGreen.black('Parabens por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite um nome para a sua conta:',
    }]).then((answer) => {

        const accountName = answer['accountName']

        console.info(accountName)

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }
        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`,
            '{"balance": 0}',
            function (err) {
                console.log(err)
            }, )
        console.log(chalk.green('Parabéns, sua conta foi criada!'))
        operations()
    }).catch((err) => console.log(err))
}

// add an amount to user account
function deposit() {

    inquirer.prompt([{
            name: 'accountName',
            message: 'Qual o nome da conta?',
        }])
        .then((answer) => {

            const accountName = answer['accountName']
            //verify is account existe
            if (!checkAccount(accountName)) {
                return deposit()
            }

            inquirer.prompt([{
                name: 'amount',
                message: 'Quanto você deseja depositar:'

            }, ]).then((answer) => {
                const amount = answer['amount']

                //add an amount
                addAmount(accountName, amount)

            }).catch((err) => console.log(err))

        }).catch((err) => console.log(err))

}

//verify account
function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false
    }
    return true
}

//get account
function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r',
    })

    return JSON.parse(accountJSON)
}

//add amount
function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    )
    console.log(chalk.green(`Foi depositado o valor de R$${amount} reais na sua conta.`))
    operations()
}
// show account balance 
function getAccountBalance() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then(
        (answer) => {
            const accountName = answer['accountName']

            //verify if account exists
            if (!checkAccount(accountName)) {
               return getAccountBalance()
            }
            const accountData = getAccount(accountName)

            console.log(chalk.bgBlue.black(`O saldo da sua conta é de R$${accountData.balance}`), )
            operations()
        }
    ).catch((err) => console.log(err))
}
//withdraw an amount from user account
function withdraw(accountName, amount) {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then(
        (answer) => {
            const accountName = answer['accountName']
            //verify account
            if (!checkAccount(accountName)) {
                return withdraw()
            }
            inquirer.prompt([{
                name: 'amount',
                message: 'Quanto você deseja sacar?'
            }]).then(
                (answer) => {
                    const amount = answer['amount']

                    removeAmount(accountName, amount)
                }
                //logica para sacar o dinheiro ou reduzir no json
            ).catch((erro) => console.log(erro))
        }
    ).catch((err) => console.log(err))
}

//remove amount
function removeAmount(accountName, amount) {

    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'))
        return withdraw()
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black('Valor indisponível'))
        return withdraw()
    }
    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    )
    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`))
    operations()
}