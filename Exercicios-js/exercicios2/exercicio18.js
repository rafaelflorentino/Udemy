/* Recebe uma array de despesas com varios dados(nome, categoria, preço) e calcule a soma total dos preços das despesas */

despesas1 = [
    { nome: 'Jornal online', categoria: 'Informação', preco: 89.99 },
    { nome: 'cinema', categoria: 'Entreterimento', preco: 150 }
]

despesas2 = [
    { nome: 'Galaxy S23', categoria: 'Eletronicos', preco: 3599.99 },
    { nome: 'Macbook Pro', categoria: 'Entreterimento', preco: 30999.90 }
]

// Jeito 01
function calculaDespesas(arrays) {
    let soma = 0
    for (let i = 0; i < arrays.length; i++) {
        soma += arrays[i].preco
    }
    return soma
}
console.log(calculaDespesas(despesas1))
console.log(calculaDespesas(despesas2))

// Jeito 02
function calculaDespesa(itens) {
    var total = 0
    for (let item of itens) {
        total += item.preco
    }
    return total
}
console.log(calculaDespesa(despesas1))
console.log(calculaDespesa(despesas2))

// Jeito 03
function calcularDespesas(itens) {
    return itens
    .map(item => item.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}
console.log(calcularDespesas(despesas1))
console.log(calcularDespesas(despesas2))

// Jeito 04
function calcularDespesas(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}
console.log(calcularDespesas(despesas1))
console.log(calcularDespesas(despesas2))


