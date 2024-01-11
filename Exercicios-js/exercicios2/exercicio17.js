/* receba uma array e retorne a soma de todos os numeros dela */
// Jeito 01
function somarNumero(array) {
    let soma = 0
    for(let i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma
}
console.log(somarNumero([10, 10, 15]))
console.log(somarNumero([20, 20, 20]))

//Jeito 02
function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)

    return soma
}
console.log(somarNumero([50, 50, 55]))
console.log(somarNumero([100, 50, 20]))

//Jeito 0#
function somarArray(numeros) {
    const quantidadeNumeros = numeros.length

    return (quantidadeNumeros === 0) ? 0 : numeros[0] + somarArray(numeros.slice(1))
}
console.log(somarArray([100, 200, 300]))
console.log(somarArray([1, 1, 1]))
