//sem promise, buscar 3 listas de alunos em 3 paginas no formato json 
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res =>{
        let resultado = ''

        res.on('data', dados=>{
            resultado+= dados
        })
        res.on('end', ()=>{
            callback(JSON.parse(resultado))
        })        
    })
}

let nomes = []
    getTurma('A', alunos => { 
        nomes = nomes.concat(alunos.map(a => `A : ${a.nome}`))

        getTurma('B', alunos => {// calback dentro de callback
            nomes = nomes.concat(alunos.map(a => `B : ${a.nome}`))

            getTurma('C', alunos => {// calback dentro de callback
                nomes = nomes.concat(alunos.map(a => `C : ${a.nome}`))
                console.log(nomes)
            })
        })
    })

