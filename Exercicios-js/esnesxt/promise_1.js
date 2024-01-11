let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 3, 2.5])//pode array
})

let q = new Promise(function (cumprirPromessa) {
    cumprirPromessa({//pode objeto
        x: 3,
        y: 4
    })
})

let r = new Promise(function (cumprirPromessa) {
    cumprirPromessa(3)//pode valor qualquer
})

// Para pegar o resultado das Promise precisar usar a função .then


p.then(function (valor) {// forma grande, then retorna o valor da Promise
    console.log(valor)
})
q.then(valor => console.log(valor))// forma reduzida, then retorna o valor da Promise
r.then(valor => console.log(valor))// forma reduzida, then retorna o valor da Promise

// Pode usar varios .then de forma encadeada, varias CallBacks

p
.then(valor => valor[0])
.then(valor => console.log(valor))// pegar primeiro elemento da array

p
.then(valor => valor[0])
.then(primeiro => primeiro[0])
.then(letra => console.log(letra))// pega a primeira letra do primeiro valor
//.then(letra => letra.toLowerCase())//tranforma em minuscula
//.then(letraMinuscula => console.log(letraMinuscula))//imprimi minuscula

function primeiroElemento(array){
    return array[0]
}
function primeiraLetra(string){
    return string[0]
}
const letraMinuscula = letra => letra.toLowerCase()

p
.then(primeiroElemento)// pegar primeiro elemento da array, chamando função
.then(valor => console.log('Primeira Elemento : '+ valor))

p
.then(primeiroElemento)// pegar primeiro elemento da array,
.then(primeiraLetra)// pegar primeiro elemento da array, chamando função
.then(valor => console.log('Primeira letra : '+ valor))

p
.then(primeiroElemento)// pegar primeiro elemento da array,
.then(primeiraLetra)// pegar primeiro elemento da array, chamando função
.then(letraMinuscula)
.then(console.log) // ou .then(letraMinuscula => console.log('letra Minúscula : '+ letraMinuscula)) 


// Por arraw functions pequenas dentro de constantes

const primeiroElementoConst = string => string[0]
const primeiraLetraConst = string => string[0]
const letraMinusculaConst = letra => letra.toLowerCase()

let s = new Promise(function (resolve) {
    resolve(['Joana', 'Bia', 'Carlos', 3, 2.5])//pode array
})
.then(primeiroElementoConst)// pegar primeiro elemento da array,
.then(primeiraLetraConst)// pegar primeiro elemento da array, chamando função
.then(letraMinusculaConst)
.then(console.log)// ou .then( v => console.log(v))


