/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
 */

function verificaNumero(numero){    
    if(numero % 3 == 0){
        return true + ` Número ${numero}  é divisivel por 3\n`
    }else{
        return false + ` Número ${numero} não é divisivel por 3\n`
    }
}
console.log(verificaNumero(1))
console.log(verificaNumero(3))
console.log(verificaNumero(5))
console.log(verificaNumero(6))
