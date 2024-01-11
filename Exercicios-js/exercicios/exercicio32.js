/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function calculaMediaVetor(vetor) {
    somaNotas = 0

    for (let i = 0; vetor.length > i; i++) {
        somaNotas += vetor[i]
    }
    return (somaNotas / vetor.length)
}
const vetor = [10, 10, 10, 10, 0]
console.log(calculaMediaVetor(vetor))