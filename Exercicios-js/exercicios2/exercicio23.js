// receba um string e conte quantas palavras ela tem

function contarPalavras(frase){
    const palavras = frase.split(' ')
    console.log(palavras)
    
    return palavras.length 
}
console.log(contarPalavras('Sou uma frase'))
console.log(contarPalavras('Me divirto aprendendo a programar'))