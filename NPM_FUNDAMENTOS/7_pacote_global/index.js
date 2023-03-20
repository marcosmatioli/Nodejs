const _ = require('lodash')

const arr = [1,2,2,3,3,4,4,5,5]

console.log(_.sortedUniq(arr))

//npm install -g lodash    ai ele instala de forma global na maquina e depois
//podemos usar o npm link lodash     para linkar nesse projeto o module sem precisar baixar ele pois ele ja está na maquina