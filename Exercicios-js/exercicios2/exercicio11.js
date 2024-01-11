/* função que receba uma array e pegue o primeiro e o último elemento e retorne um nova array com os 2 elementos*/
// jeito 01
function primeiroEUltimo(array){
    novaArray = [array[0], array[array.length -1]]

    return novaArray
}
 console.log(primeiroEUltimo([7, 114, "olá"]))
 console.log(primeiroEUltimo([-100, "olá", 16]))

 // jeito 02
 function primeiroUltimo(elementos){
    const primeiroElemento = elementos.shift()
    const UltimoElemento = elementos.pop()

    return [primeiroElemento, UltimoElemento]
 }
 console.log('\n')
 console.log(primeiroUltimo(['a', 114, "olá"]))
 console.log(primeiroUltimo([130, "agua", -46]))