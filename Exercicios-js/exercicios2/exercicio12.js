// função recebe objeto e um parametro e retorna um copia do objeto sem o parametro passado
// Jeito 01
function removerPropriedade(objeto, propriedade) {
    copia = { ...objeto }
    delete copia[propriedade]

    return copia
}

console.log(removerPropriedade({ a: 1, b: 2 }, 'a'))
console.log(removerPropriedade({
    id: 20,
    nome: 'caneta',
    descricao: 'não preenchido'
}, 'descricao'))

console.log(Object.is(removerPropriedade({ a: 1, b: 2 }, 'a')))

//Jeito 02
function removePropriedade(objeto, propriedade) {
    copia = Object.assign({}, objeto)
    delete copia[propriedade]

    return copia
}

console.log(removePropriedade({ d: 3, e: 4 }, 'd'))