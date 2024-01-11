/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function contaNegativos(vetor) {
    let qntNegativos = 0
    let numerosNegativos = []

    for (let i = 0; vetor.length > i; i++) {
        if (vetor[i] < 0) {
            numerosNegativos.push(vetor[i])
            qntNegativos++
        }
    }
    return `Tem ${qntNegativos} Números Negativos: ${numerosNegativos}`
}
vetor = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
console.log(contaNegativos(vetor))