const express = require('express')
const app = express()
const bodyParser = require('body-parser') // Precisa instalar o body-parser no terminal

// Importando saudacaoMid com caminho relativo
const saudacao = require('./saudacaoMid') 
// importando usuário 
const usuarioApi = require('./api/usuario') 

app.post('/usuario', usuarioApi.salvar) // Associa função salvar a url post usuario
app.get('/usuario', usuarioApi.obter) // Associa função obter a url get  usuario

// body-parser para interpretar texto
app.use(bodyParser.text()) // Qualquer texto que chegue sera interpretado
// body-parser interpretar json
app.use(bodyParser.json()) 
// body-parser interpretar dados tipo urlencoded(formularios)
app.use(bodyParser.urlencoded({ extended: true })) 

// Função saudação de saudaçãoMid.js
app.use(saudacao('Rafael'))

// função usuario
require('./api/produto')(app, 'com param!') // importando e usando a função, e passando parametros ao mesmo tempo


/* A ordem das funções na cadeia e importante, Middleware */

// Primeira função, precisa do next() para sair da função e ir para proxima função da cadeia.
app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

// Recebe dois parametros pela requisição, query
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Relatório: ${req.query.completo}, ano: ${req.query.ano}`) // pega o id da requisição, barra de endereço
})

// com body parse recebendo texto
app.post('/corpo', (req, res) => {    
       // res.send(req.body)  // pega todos os dados
       //res.send(req.body.nome) // pega só o nome
       res.send(JSON.stringify(req.body)) // Traz em formato json
})

/*
// forma sem body parse de recber dados
app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })

    req.on('end', function(){
        res.send(corpo)
    })
})*/

// Receber o id do cliente pela requisição, params
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`) // pega o id da requisição, barra de endereço
})

// Função do meio, usa next para passar para proxima ao final.
app.get('/opa', (req, res, next) => { // Res.json passa um arquivo json contendo uma Array de dados
    console.log('Durante...')
    res.json({
        data: [
        {id: 7, name: 'Ana', position: 1},
        {id: 34, name: 'Bia', position: 2},
        {id: 73, name: 'Carlos', position: 3}
    ],
    count: 30, 
    skip: 0, 
    limit: 3, 
    status: 200 

    })
    next()
})

// Ùltima função
app.use('/opa', (req, res, next) => {
    console.log('Depois...')
})


/*

//  Use aceita Tudo
app.use((req, res) => {
    res.send('Estou <b>bem!</b>')
})

// Só aceita Get
app.get('/home', (req, res) => {
    res.send('Estou na <b>Home Page!</b> com Get')
})

// Só aceita Post
app.post('/home', (req, res) => {
    res.send('Estou na <b>Home Page!</b> com Post')
})

// All Aceita Tudo
app.all('/home', (req, res) => {
    res.send('Estou na <b>Home Page!</b> com All')
})
// Res.json passa um arquivo json contendo um Objeto com dados.
app.get('/opa', (req, res) => {
    res.json({
        name: 'ipad 32Gb',
        price: 1899.00,
        discount: 0.12
    })
})

// Res.json passa um arquivo json contendo uma Array de dados
app.get('/opa', (req, res) => {
    res.json([
        {id: 7, name: 'Ana', position: 1},
        {id: 34, name: 'Bia', position: 2},
        {id: 73, name: 'Carlos', position: 3}
    ])
})
*/

app.listen(3000, () => {
    console.log('Backend Executando...')
})