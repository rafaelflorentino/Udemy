console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3 

exports = null  // precisa usar mobule.exports = null , para atribui valor ao exports

exports = {  // precisa usar mobule.exports pra funcionar
    nome: 'Teste'
}
console.log(module.exports)

module.exports = { publico: true}
console.log(module.exports)