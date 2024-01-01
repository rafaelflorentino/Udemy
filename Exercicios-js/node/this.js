console.log(this === global)//false
console.log(this === module)//false

console.log(this === module.exports)//true
console.log(this === exports)//true


function logThis(){ // this dentro de uma funcao aponta pra global, fora de uma função aponta pra modulo.exports
    console.log('Dentro de uma função')
    console.log(this === exports)//false 
    console.log(this === module.exports) //false  
    console.log(this === global)//true
}

logThis()