/* recebe uma array de numeros e um digito, retornar uma array dos numeros que tem a mesma quantidade de digitos do valor passado */

// Jeito 01
function filtrarPorQuantidadeDeDigitos(numeros, digito){
    let resultado = []

    for(let numero of numeros){        
        const quantidade = String(numero).length
        if(quantidade === digito){
            resultado.push(numero)

        }
    }
    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))

//Jeito 02
function filtrar(numeros, digito){
    return numeros.filter(numero =>{
        const quantidadeDigitos = String(numero).length

        return quantidadeDigitos === digito
    })
}
console.log(filtrar([38, 2, 365, 10, 125, 11], 2))
console.log(filtrar([5, 9, 1, 125, 11], 1))
