const fabricantes = ["Mercedes", 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)//para cada elemento da array ele dispara a função imprimir e ela e exxecutada
console.log(' ')

fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})

console.log(' ')
fabricantes.forEach(fabricante => console.log(fabricante))//para cada elemento da array ele imprime o nome do fabricante(valor)nao indice