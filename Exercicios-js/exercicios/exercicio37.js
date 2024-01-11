/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
 */
// Jeito 01
function progressaoAritimetica(n, a1, r){
    let vetor = [a1]
    let soma = a1
    for(let i = 0; n-1 > i; i++){
        vetor.push(vetor[i] + r)
        console.log(vetor[i] + r)
        soma += vetor[i] + r
    }
    return `Vetor: ${vetor} \nSoma: ${soma}`
}

function progressaoGeometrica(n, a1, r){
    let vetor = [a1]
    let soma = a1
    for(let i = 0; n-1 > i; i++){
        vetor.push(vetor[i] * r)
        console.log(vetor[i] * r)
        soma += vetor[i] * r
    }
    return `Vetor: ${vetor} \nSoma: ${soma}`
}    

console.log(progressaoAritimetica(8,2,5)) // 2,7,12,17,22,27,32,37
console.log(progressaoGeometrica(7,2,2)) 

// Jeito 2

function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(8, 2, 5)
console.log('----------------');
pG(7, 2, 2)