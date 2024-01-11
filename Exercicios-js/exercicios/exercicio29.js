/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function verificaIntervalo(numero) {
    let qntDentro = 0
    let qntFora = 0
    let numerosDentro = []
    let numerosFora = []

    for (let i = 0; numero.length > i; i++) {
        if (numero[i] >= 10 && numero[i] <= 20) {
            numerosDentro.push(numero[i])
            qntDentro++
        } else {
            numerosFora.push(numero[i])
            qntFora++
        }        
    }
    return `${qntDentro} Números Dentro do intervalo(de 10 a 20): ${numerosDentro}\n${qntFora} Números Fora: ${numerosFora}`
}

vetor = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
console.log(verificaIntervalo(vetor))