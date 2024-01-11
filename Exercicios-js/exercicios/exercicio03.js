/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

// Jeito 01
function elevar(base, expoente) {
    return Math.pow(base, expoente)
}
console.log(elevar(10, 2))

// Jeito 02
function expoente (base, expoente) {
    let resultado = Math.pow(base, expoente)//Método Antigo:   
    resultado = base ** expoente //Método novo:

    return resultado
}
console.log(expoente(2, 3))

// Jeito 03
const exponeciar = (base, expoente) => base ** expoente
console.log(exponeciar(10, 2))