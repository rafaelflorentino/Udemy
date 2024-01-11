/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */
// Jeito 01
function calculaMediaPonderada(codigo, nota1, nota2, nota3) {
    notas = [nota1, nota2, nota3]
    notas.sort((a,b) => a < b ? 1 : -1)// ordenar para pegar a maior nota pois tem peso 4

    mediaPonderada = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / (4 + 3 + 3)

    if (mediaPonderada >= 5) {
        return `Código do Aluno: ${codigo}. Nota1: ${notas[0]}, Nota2: ${notas[1]}, Nota3: ${notas[2]}. Valor da média: ${mediaPonderada} ( Aprovado!!! )`
    } else {
        return `Código do Aluno: ${codigo}. Nota1: ${notas[0]}, Nota2: ${notas[1]}, Nota3: ${notas[2]}. Valor da média: ${mediaPonderada} ( Reprovado. )`
    }
}

console.log(calculaMediaPonderada(01, 7, 8, 9))
console.log(calculaMediaPonderada(02, 7, 7, 7))
console.log(calculaMediaPonderada(03, 4, 5, 5))

//Jeito 02

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`\nCódigo do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)