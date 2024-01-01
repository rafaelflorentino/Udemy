const moduloA = require('../../moduloA')
//const moduloA = require('C:/Users/enter/Desktop/Projetos/Udemy/Exercicios-js/node/moduloA.js')// caminho absoluto
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end() 
}).listen(8080)