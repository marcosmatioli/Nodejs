// modulo externo
const minimist = require("minimist")

// modulo interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const b = parseInt(args ['b'])
const a = parseInt(args ['a'])

soma(a,b)