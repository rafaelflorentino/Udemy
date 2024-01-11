const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ // Função tradicional
    console.log(`${indice + 1}) ${nome}`)

})

aprovados.forEach(function(nome, indice, array){ // 3° parametro retorna uma array
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)

})

aprovados.forEach(nome => console.log(nome)) //arrow function

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)