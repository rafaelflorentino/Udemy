/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e
retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro
inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo
ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false,
portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo. */
// Jeito 01
function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo == true && (numero == minimo || numero == maximo)) {
        return true
    }
    if (numero > minimo && numero < maximo) {
        return true
    } else {
        return false
    }
}
console.log(estaEntre(101, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(4, 3, 150))
console.log(estaEntre(3, 3, 150, true))
console.log(estaEntre(3, 3, 150, false))

// Jeito 2
function numeroEstaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}
console.log('\n')
console.log(numeroEstaEntre(3, 3, 150, true))
console.log(numeroEstaEntre(3, 3, 150, false))
console.log(numeroEstaEntre(4, 3, 150, false))

// Jeito 3
function numEstaEntre(numero, minimo, maximo, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
console.log('\n')
console.log(numEstaEntre(3, 3, 150, true))
console.log(numEstaEntre(3, 3, 150, false))
console.log(numEstaEntre(4, 3, 150, false))