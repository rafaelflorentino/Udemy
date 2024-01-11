/*25) Escrever um programa para exibir os números de 1 até 50 na tela */

// Jeito 01
function exibirNumeros() {
    let i = 0

    while (i < 50) {
        console.log(i + 1)
        i++
    }
}
exibirNumeros()

// Jeito 02
function contador() {
    for (let i = 1; i <=50; i++) {
        console.log(i)        
    }
}
contador()