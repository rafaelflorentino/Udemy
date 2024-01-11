/*12) Faça um algoritmo que calcule o fatorial de um número. */
// 
function calcularFatorial(numero){
    if(numero == 0){
        return 1
    } else {
        return numero * calcularFatorial(numero - 1)
    }
}

console.log(calcularFatorial(4))

