/*recebe um objeto com estudandes e notas, as notas estão em uma array, retornar nome e média do melhor aluno */

const soma = array  => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length

function receberMelhorEstudante(estudantes){
    const estudantesComMedias= Object.entries(estudantes).map( estudante =>{
        const chave = 0,
        valor = 1

        return {nome: estudante[chave], media: media(estudante[valor])}
    })
    console.log(estudantesComMedias)

    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const receberMelhorEstudante = estudantesOrdenados[0]

    return receberMelhorEstudante
}


console.log(receberMelhorEstudante({
    Joao: [8, 7.5, 8.9, 6],
    Maria: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))

//console.log(calcularMedia([8, 7.5, 8.9, 6]))