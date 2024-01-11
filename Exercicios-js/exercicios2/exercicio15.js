/*função recebe uma array de numeros, e criar um nova arraw apenas com os numeros pares e que tenham o indice par */

array1 = [1, 2, 3, 4]
array2 = [10, 70, 22, 43]

//Jeito 01
function somentePares(array) {
    let pares = []
    for (i = 0; i < array.length; i++){
        if(array[i] % 2 === 0 && i % 2 === 0){
            pares.push(array[i])
        }
    }
    return pares
}
console.log(somentePares(array1))
console.log(somentePares(array2))

// Jeito 02
function somenteParesA(numeros) {
    let resultado = []
    for (i = 0; i < numeros.length; i +=2){// roda de 2 em dois so os indices pares(0,2,4,6) e so verifica eles
        const numeroPar = numeros[i] % 2 === 0
        if(numeroPar){
            resultado.push(numeros[i])
        }
    }
    return resultado
}
console.log(somenteParesA(array1))
console.log(somenteParesA(array2))

// Jeito 03
function somenteParesB(numeros) {
   return numeros.filter((numero, indice) =>{
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0

    return numeroPar && indicePar
   })
}
console.log(somenteParesA(array1))
console.log(somenteParesA(array2))