// Armazenado uma função em uma varivel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenado uma função Arrow em uma varivel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3)) 

// Armazenado uma função Arrow em uma varivel
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('legal')