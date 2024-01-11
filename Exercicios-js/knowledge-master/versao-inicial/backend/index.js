const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign() // le os arquivos e não preciso importar os caminhos endereços dos rquivos abaixo
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js') 
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando2...')
})