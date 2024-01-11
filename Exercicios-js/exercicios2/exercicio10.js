/*recebe um numero e imprimi sinais de + de acordo com a quantidade do número passado */
// Jeito 01
function simboloMais(quantidade){
    let resultado = []
    for(let i = 0; i < quantidade; i++){
        resultado.push('+')
    }
    return resultado.join('')
}

console.log(simboloMais(4))

// Jeito 02
function simboloSoma(quantidade){
    return Array(quantidade).fill('+').join('')
}
console.log(simboloSoma(3))

//jeito 03
function simboloSomar(quantidade){
    return "+".repeat(quantidade)
}
console.log(simboloSoma(2))