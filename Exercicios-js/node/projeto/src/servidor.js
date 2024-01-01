const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))// tranformar os post que vem do formulario em objetos para poder ler


app.get('/produtos', (req, res, next) => { //retorna todos os pordutos
    res.send(bancoDeDados.getProdutos())
    // res.send({ nome: 'Notebook', preco: 123.45})//convetter para json
})

app.get('/produtos/:id',(req, res, next) => { //retorna o porduto de acordo com id passado
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos', ( req, res, next) => {//recebe um post do formulario e salva no banco
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON retorna em json
})

app.put('/produtos/:id', ( req, res, next) => {//altera dados produto
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON retorna em json
})

app.delete('/produtos/:id', ( req, res, next) => {//deletar produto
    const produto = bancoDeDados.excluirProduto(req.params.id)    
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})