/* recebe uma array e retorna o menor numero */

//Jeito 01
function menorNumero(numeros){
   let menor = numeros[0]

    for(let numero of numeros){
        if(numero < menor){
            menor = numero
        }
    }
    return menor
}
console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))

// Jeito 02
function menorNumeroA(numeros){
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}
console.log(menorNumeroA([10, 5, 35, 65]))
console.log(menorNumeroA([5, -15, 50, 3]))

// Jeito 03
function menorNumeroB(numeros){
    return Math.min(...numeros)
}
console.log(menorNumeroB([10, 5, 35, 65]))
console.log(menorNumeroB([5, -15, 50, 3]))