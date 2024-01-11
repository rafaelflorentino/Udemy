/* REcebe uma array de numero e retorna o segundo maior número */

function segundoMaior(numeros) {
    let maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)

    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))

// forma 2
function segundoMaiorNumeto(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]

    return segundoMaior
}
console.log(segundoMaiorNumeto([12, 16, 1, 5]))
console.log(segundoMaiorNumeto([8, 4, 5, 6]))

// ordenando do maior para o menor
var numbers = [4, 2, 5, 1, 3]
numbers.sort(function(a, b) {
  return b - a;
})
console.log(numbers)