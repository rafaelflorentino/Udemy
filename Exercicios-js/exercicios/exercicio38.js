/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
 */
//Jeito 01
function calculaImpares(inicio = 0, fim = 100) {
    if (fim < inicio) {
        corrigeValor(inicio, fim)
    }else{
        for (let i = inicio; fim >= i; i++) {
            if (i % 2 == 1) {
                console.log(i)
            }
        } 
    }
}

function corrigeValor(inicio, fim) {
    let aux = inicio
    let comeco = fim
    let final = aux

    return calculaImpares(comeco, final)
}
calculaImpares(1, 3)
console.log('\n')
calculaImpares(2, 10)
console.log('\n')
calculaImpares(10, 1)

// Jeito 2
function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }

    for (let i = inicio; i <= fim; i++) {        
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

imprimirImpares(19, 3)
