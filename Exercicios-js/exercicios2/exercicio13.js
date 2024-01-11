// funcao recebe array e retorna uma nova array so com os números que tem dentro dela ou vazia caso nao tenha numeros

// Jeito 01
function filtrarNumeros(array){
    novaArray = []
    for(let i = 0; i < array.length;i++){
        if( typeof array[i] === 'number'){           
            novaArray.push(array[i])
        }
    }
    return novaArray
}
 console.log(filtrarNumeros(['javascript', 1, '3', 'web', 26]))
 console.log(filtrarNumeros(['a', 'c']))

//Jeito 02
function filtrarNumerosC(array){
    novaArray = []
    for(let item of array){
        if(typeof item === 'number'){
            novaArray.push(item)
        }
    }
    return novaArray
 }
 console.log(filtrarNumerosC(['javascript', 12, '6', 'web', 67]))

 //Jeito 03
 function filtrarNumerosB(array){
    return array.filter(item => typeof item === 'number')
 }
 console.log(filtrarNumerosB(['javascript', 4, '5', 'web', 35]))

