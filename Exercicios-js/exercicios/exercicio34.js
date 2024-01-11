/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */
//Jeito 01
function verificaIgual(string1, string2){
    texto1 = string1.toLowerCase()
    texto2 = string2.toLowerCase()

    if(texto1.includes(texto2)){
        return true
    }if(texto2.includes(texto1)){
        return true
    }else{
        return false
    }
}
const string1 = 'abc'
const string2 = 'def'
const string3 = 'abc'

console.log(verificaIgual(string1,string2))
console.log(verificaIgual(string1,string3))
console.log(verificaIgual(string3,string1))


//Jeito 02

function verificacaoDeString(string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    for (let i = 0; i < string2.length; i++) {
        let caractereString2 = string2.charAt(i).toLowerCase()

        for (let j = 0; j < string1.length; j++) {
            let caractereString1 = string1.charAt(j).toLowerCase()

            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}
console.log('\n')
console.log(verificacaoDeString('abcdf', 'dcba'))
console.log(verificacaoDeString('abc', 'abc'))
