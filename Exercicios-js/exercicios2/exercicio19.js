/* recebe uma array com numeros inderteminados e calcule a media simples */

array1 = [0, 10]
array2 = [1, 2, 3, 4, 5]

//Jeito 01
function calcularMedia(numeros){
    let soma = 0
 
    for(let numero of numeros){
        soma += numero
    }
    return soma / numeros.length
}

console.log(calcularMedia(array1))
console.log(calcularMedia(array2))

// Jeito 02
function calcularMedias(numeros){
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual)  
    const media = soma / numeros.length

    return media
}
console.log(calcularMedias(array1))
console.log(calcularMedias(array2))