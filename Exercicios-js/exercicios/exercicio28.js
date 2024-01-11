/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function verificaImparPar(numero) {
   let impares = []
   let pares = []
   let qntImpares = 0
   let qntPares = 0

    for (let i = 0; numero.length > i; i++) {
        if (numero[i] % 2 == 0) {
            pares.push(numero[i])
            qntPares++
        } else {
            impares.push(numero[i])
            qntImpares++
        }
    }
    return `${qntImpares} Números Impares: ${impares}, ${qntPares} Números Pares: ${pares}`
}
vetor = [10, 11, 12, 13, 14, 15, 16]
console.log(verificaImparPar(vetor))