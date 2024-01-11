// Arrow Function
const soma = (a, b) => a + b // return implícito
console.log(soma(2, 3))

const soma2 = (a, b) =>{//se abrir chaves tem que por o return
    return  a + b
}
console.log(soma(5, 4))

// Arrow function This
const lexico1 = () => console.log(this === exports)
lexico1()// this detro de arraw function aponta para exports, ou modulo exports nunca para global

// Parametro Default
function log(texto = 'Node'){// se não passar parametro poe Node por padrão
    console.log(texto)
}
log()
log('parametro mais forte')

//Parametro Rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))