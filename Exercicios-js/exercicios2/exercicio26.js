/* recebe uma string e remova as vogais dela */
// Jeito 01
function removeVogais(frase){
    let novaFrase = frase.replace(/[aeiou]/g, "")

    return novaFrase
}
console.log(removeVogais("Cod3r"))
console.log(removeVogais("Fundamentos"))

// Jeito 02
function removerVogais(frase){
    const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O','u','U']
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))

    return frase
}
console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))

// Jeito 03
function removerVogais2(frase){
    for(let i = 0; i < frase.length; i++){
        if(frase[i] === 'a' || frase[i] === 'e' || frase[i] === 'i' || frase[i] === 'o' || frase[i] === 'u' ){
            frase = frase.replace(frase[i], "")
        }
    }
    return frase
}
console.log(removerVogais2("Cod3r"))
console.log(removerVogais2("Fundamentos"))