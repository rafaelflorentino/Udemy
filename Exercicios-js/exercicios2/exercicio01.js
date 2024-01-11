/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação no final.
Exemplos:
cumprimentar ("Leonardo") // retornará “olá, Leonardor"
cumprimentar ("marao) // retornará “olá, Mariaio,*/

function cumprimentar(nome){
    return `Olá, ${nome}!`
}

function cumprimentar2(nome){
    const saudacao = 'Olá'
    return [saudacao, nome].join(', ').concat("!")
}

console.log(cumprimentar('Rafael'))
console.log(cumprimentar2('Rafael'))