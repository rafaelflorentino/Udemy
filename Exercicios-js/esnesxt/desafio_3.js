const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {//le arquivo, caminho do arquivo, função de retorno _, ignnora o erro, recebe dados em conteudo
            resolve(conteudo.toString())//tranforma em texto e põe em conteúdo, retorna conteudo pelo resolve
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt') //caminho do arquivo de texto

lerArquivo(caminho)
.then(conteudo => conteudo.split('\r\n'))
//.then(linhas => console.log(linhas[2]))
//.then(linhas => console.log(linhas.length))
.then(linhas => linhas.join(','))
.then(conteudo => `O valor final é: ${conteudo}`)
.then(console.log)
