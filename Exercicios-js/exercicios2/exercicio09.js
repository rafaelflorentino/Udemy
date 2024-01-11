/*função que recebe 2 parametros, primeiro parametro é o elemento que repetira, segundo numero de vezes que ira repetir, retornar array */
// Jeito 01
function repetir(elemento, repeticoes){
    let resultado = []
    for(let i = 0; i < repeticoes; i++){
     // resultado[i] = elemento
        resultado.push(elemento)
    }
    return resultado
}
console.log(repetir(7,3))
console.log(repetir('codigo',2))

// Jeito 02
function repetirElemento(item, quantidade){
    return Array(quantidade).fill(item)
}
console.log(repetirElemento(5,5))