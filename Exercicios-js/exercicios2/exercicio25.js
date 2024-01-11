/* Reccebe uma palavra e uma string, retornar das string as palavras que contem a palavra*/

function buscarPalavras(palavra, texto){
    const palavrasParecidas = []

    for( let i = 0; i < texto.length; i++){
        if(texto[i].includes(palavra)){
            palavrasParecidas.push(texto[i])
        }
    }
    return palavrasParecidas
}

console.log(buscarPalavras('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavras('pyton', ['javascript', 'java', 'c++']))

//Jeito 02
function buscaPalavras(palavra, texto){
    return texto.filter(texto => texto.includes(palavra))
}

console.log(buscaPalavras('pro', ['programação', 'mobile', 'profissional']))
console.log(buscaPalavras('pyton', ['javascript', 'java', 'c++']))

// Jeito 3
function buscarPalavra(palavra, texto){
    const palavrasParecidas = []

    for( let text of texto){
        if(text.includes(palavra)){
            palavrasParecidas.push(text)
        }
    }
    return palavrasParecidas
}
console.log(buscarPalavra('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavra('pyton', ['javascript', 'java', 'c++']))