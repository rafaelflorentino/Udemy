const _ = require('lodash')//busca o arquivo index.js ele exporta pro sistema os arquivos (module.exports = require('./lodash');)
setInterval(() => console.log(_.random(1, 1000)), 2000)// gerea numero randomico entre 1 e 1000 a casa 2 segundos

// ctrl c para parar no terminal
// rs para reiniciar script no terminal