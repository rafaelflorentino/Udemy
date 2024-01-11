/* Desenvolva uma função que receba dois numeros inteiros não negativos(maiores ou igual a zero) 
mutiplique eles sem usar a multipicação */
// Jeito 01
function multiplicar(numeroA, numeroB) {
    let multiplicacao = 0
    if (numeroA < 0 || numeroB < 0) {
        return 'Os numeros precisam ser inteiros, não podem ser negativos'
    } else {
        for (let i = 0; i < numeroB; i++) {
            multiplicacao += numeroA
        }
        return multiplicacao
    }
}
console.log(multiplicar(5, 100))
console.log(multiplicar(5, 5))
console.log(multiplicar(-8, 7))
console.log(multiplicar(0, 3))

// Jeito 02
function multiplicarA(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) { return 0 }

    return multiplicador === 1 ? numero : numero + multiplicarA(numero, multiplicador - 1)
}
console.log('\nmultiplicarA')
console.log(multiplicarA(5, 100))

// Jeito 03
function multiplicarB(numeroA, numeroB) {//tem menos chamadas recursivas
    if (numeroA === 0 || numeroB === 0) return 0

    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)

    function multiplicarRecursivamente(numero, multiplicador) {
        return multiplicador === 1 ? numero : numero + multiplicarRecursivamente(numero, multiplicador - 1)
    }

    return multiplicarRecursivamente(maiorNumero, menorNumero)
}
console.log('\nmultiplicarB')
console.log(multiplicarB(5, 100))