/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */
// Jeito 01
const vetor = [1, 2, 3, 4]
const vetor2 = [1, 2, 3, 4, 5, 6, 7, 8]

function multiplica(vetor, valor) {
    let vetorFinal = []
    for (let i = 0; vetor.length > i; i++) {
        vetorFinal.push(vetor[i] * valor)
    }
    return vetorFinal
}
function multiplica2(vetor, valor) {
    let vetorFinal2 = []
    for (let i = 0; vetor.length > i; i++) {
        if (vetor[i] > 5) {
            vetorFinal2.push(vetor[i] * valor)
        }
    }
    return vetorFinal2
}
console.log(multiplica(vetor, 2))
console.log(multiplica2(vetor2, 2))


// Jeito 02
let vetor3 = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor3, multiplicador){
    let vetorResultado = []
    vetor3.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor3, 3))
