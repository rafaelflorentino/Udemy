/*Recebe um objeto com chaves e parametros e retorne outro objetos com valores das chaves/parametros trocados */
// Jeito 01
function inverter(objeto) {
    const novoObjeto = {}
  
    for (obj in objeto) {
        novoObjeto[objeto[obj]] = obj
    }
    //return Object.fromEntries(Object.entries(objeto))
    return novoObjeto
}
console.log(inverter({ a: 1, b: 2, c: 3 }))

// Jeito 02
function inverterA(objeto) {
    const objInvertido = {}

    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
            valor = 1

        objInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })

    return objInvertido
}
console.log(inverterA({ a: 1, b: 2, c: 3 }))

// Jeito 03
function inverterB(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
        .map(parChaveValor => parChaveValor.reverse())

    return Object.fromEntries(paresDeChaveValorInvertidos)
}
console.log(inverterB({ a: 1, b: 2, c: 3 }))