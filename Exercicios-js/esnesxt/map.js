const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)// errado
console.log(tecnologias.get('react'))//certo
console.log(tecnologias.get('react').framework)//certo

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)// deleta
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)// mostra o tamanho

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')// não aceita chaves repetidas, vai sobrescrever valor para b
chavesVariadas.set(456, 'b')// valor pode ser repetido, mas a chave não
console.log(chavesVariadas)