/*função que recebe um objeto e retorne uma array de arrays, formada pelas chaves e valores dos objetos */

objeto1 = {
    nome: 'Maria',
    profissao: 'Desenvolvedor de software'
}
objeto2 = {
    codigo: '11111',
    preco: 1350
}

//jeito 1
function RetornaArrays(objeto){
    return Object.entries(objeto)
}
console.log(RetornaArrays(objeto1))
console.log(RetornaArrays(objeto2))

//jeito 2
function RetornaArray(objeto){
    const resultado = []
    for(let chave in objeto){
        resultado.push([chave, objeto[chave]])
    }

    return resultado
}
console.log(RetornaArray(objeto1))

//jeito 3
function RetornaArray2(objeto){
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
  
    return resultado
}
console.log(RetornaArray2(objeto2))