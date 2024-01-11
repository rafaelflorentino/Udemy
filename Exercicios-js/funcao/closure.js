// Closure é o escpo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular veríaveis externas à função

// Contexto léxico em ação!

const x = 'Global'

 function fora(){
    const x = 'Local' // vai imprimir 'Local' por causa que a função esta retornando
    function dentro(){
        return x
    }
    return dentro //retorna 'Local'
 } 

 const minhaFuncao = fora()
 console.log(minhaFuncao())