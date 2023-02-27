const url = require('url')
const andress = 'htttp://www.meusite.com.br/catalog?produtos=cadeira'
const parsedurl = new url.URL(andress) // metodo na url para virar url de fato

console.log(parsedurl.host)
console.log(parsedurl.pathname)
console.log(parsedurl.search)
console.log(parsedurl.searchParams)
console.log(parsedurl.searchParams.get('name'))
console.log(parsedurl.href)
console.log(parsedurl.port)
console.log(parsedurl.protocol)