/* 4) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
 */
// Jeito 01
function dividir(dividendo, divisor) {
    divisao = dividendo / divisor
    resto = dividendo % divisor

    return (`Divisão = ${divisao}` + ' Resto = ' + resto)
}
console.log(dividir(8, 3))

// Jeito 02
const dividindo = (dividendo, divisor) => `Divisão = ${dividendo / divisor}` + ' Resto = ' + dividendo % divisor
console.log(dividindo(8, 3))

// Jeito 03
function dividir2 (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

dividir2(11, 4)