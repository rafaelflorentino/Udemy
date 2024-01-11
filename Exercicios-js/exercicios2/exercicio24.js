// recebe um caractere e uma frase,  retorna quantas vezez esse caracter aparece na frase, diferencia maiuscula de minuscula

function contarCaractere(caractere, frase){
    let contador = 0

    for(let i =0; i < frase.length; i++){        
        if(caractere === frase[i]){
            contador++
        }
    }
    return contador
}
console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))
console.log(contarCaractere('a', 'a a a a a A'))

// jeito 02
function contarCaracteres(caractere, frase){
    let contador = 0

    for(let i =0; i < frase.length; i++){        
        if(frase.charAt(i) === caractere){
            contador++
        }
    }
    return contador
}
console.log(contarCaracteres('a', 'a a A'))

// jeito 03
function contaCaractere(caractereBuscado, frase){
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}
console.log(contaCaractere('d', 'd d d d D'))