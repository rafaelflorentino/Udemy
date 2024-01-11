/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.
 */
const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

function adiciona(vetor1, vetor2) {

    for (let i = 0; vetor2.length > i; i++) {
        vetor1.push(vetor2[i])
        console.log(vetor2[i])
    }
    return  `Vetor Adicionar ${vetor2}\nVetor Pilha: ${vetor1}`
}

console.log(adiciona(vetorPilha, vetorAdiciona))