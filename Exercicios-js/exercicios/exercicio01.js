/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores */

//JEITO 01
function calcular(numero1, numero2) {
    soma = numero1 + numero2
    subtracao = numero1 - numero2
    multiplicacao = numero1 * numero2
    divisao = numero1 / numero2

    return `Soma = ${soma}, Subtração = ${subtracao}, Multiplicação = ${multiplicacao}, Divisão = ${divisao}`
}
console.log(calcular(8, 2))

//JEITO 02
function calcular2(numero1, numero2) {
    return {
        'soma': numero1 + numero2,
        'subtracao': numero1 - numero2,
        'multiplicacao': numero1 * numero2,
        'divisao': numero1 / numero2
    }
}
console.log(calcular2(8, 2))

//JEITO 03
const calc = (n1, n2) => `Soma = ${n1 + n2}, Subtração = ${n1 - n2}, Multiplicação = ${n1 * n2}, Divisão = ${n1 / n2}`
console.log(calc(8, 2))