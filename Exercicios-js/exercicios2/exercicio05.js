/*Recebe dois números e retorna se o primeiro e maior ou ou igual ao segundo número */

function MaiorOuIgual(numero1, numero2) {
    if (typeof numero1 != typeof numero2) {
        return `Valor Digitado inválido`
    } else if (numero1 == numero2) {
        return `Primeiro Número: ${numero1} é igual ao Segundo Número: ${numero2} `
    } else if (numero1 > numero2) {
        return `Primeiro Número: ${numero1} é maior que Segundo Número: ${numero2} `
    } else if (numero1 < numero2) {
        return `Primeiro Número: ${numero1} é menor que Segundo Número: ${numero2} `
    }

}
console.log(MaiorOuIgual(5, 4))
console.log(MaiorOuIgual(4, 5))
console.log(MaiorOuIgual(5, 5))
console.log(MaiorOuIgual(0, "0"))


//Jeito 02
function MaiorOuIgualBoolean(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) {
        return false
    }
    return primeiro >= segundo
}

console.log('\n')
console.log(MaiorOuIgualBoolean(0, 0))
console.log(MaiorOuIgualBoolean(0, "0"))
console.log(MaiorOuIgualBoolean(5, 1))
console.log(MaiorOuIgualBoolean(1, 2))