const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá</h1>');
});

app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users:[{
            name: 'Hcode',
            email: 'contato@fcide.com.br',
            id: 1
        }]
    });
});

app.listen(3000, '127.0.0.1', ()=>{
    console.log('servidor rodando!');
});

/*
// Forma simples sem o express nem o nodemon
const http = require('http');

let server = http.createServer((req, res) => {
    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    switch(req.url){
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Olá</h1>');

        break;

        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                users:[{
                    name: 'Hcode',
                    email: 'contato@fcide.com.br',
                    id: 1
                }]
            }));
        break;
    }
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('servidor rodando!');
});

*/

