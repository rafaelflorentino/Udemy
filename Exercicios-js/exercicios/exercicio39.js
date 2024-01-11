/* 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/

function trocaVetor(vetorA, vetorB) {
    if (vetorA.length != vetorB.length) {
        return 'Erro vetores nao tem o mesmo tamanho!!'
    } else {
        for (let i = 0; v1.length > i; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
        return `Vetor 1: ${vetorA}\nVetor 2: ${vetorB}`
    }
}
v1 = [1, 2, 3, 4, 5]
v2 = [3, 3, 3, 3, 3]

console.log(trocaVetor(v1, v2))