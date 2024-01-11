/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/
//Jeito 01
function concat(vetor1, vetor2, vetor3){
    let vetor = vetor1
    let concatenar = vetor.concat(vetor3, vetor2)

    return `${vetor1},${vetor2},${vetor3}\n ${concatenar} `
}

vetorInteiro = [1,2,3,4]
vetorString = ['Agua', 'Terra', 'Fogo', 'Ar']
vetorDouble = [1.5, 2.2, 3.5, 4.7]

console.log(concat(vetorInteiro, vetorString, vetorDouble))


// Jeito 02
let vetorInteiro2 = [1, 2, 3, 4]
let vetorString2 = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble2 = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro2, vetorDouble2, vetorString2))
console.log(concatenar(vetorDouble2, vetorString2, vetorInteiro2))