/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */
// Jeito 01
function calcularMaiorMenor(numero) {
    let menorNumero = numero[0]
    let maiorNumero = numero[0]

    for (let i = 0; numero.length > i; i++) {
        if (numero[i] > maiorNumero) {
            maiorNumero = numero[i]
        }
        if(numero[i] < menorNumero) {
            menorNumero = numero[i]
        }
    }
    return `Maior Número: ${maiorNumero}, Menor Número: ${menorNumero} \n`
}
vetor = [2, -3, 4, 5, 1, 6, 7, 55, 8, 80, -2]
console.log(calcularMaiorMenor(vetor))

// Jeito 02
function maiorMenor(vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor[i] < menor) {
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))