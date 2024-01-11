console.log('a =', a)//undefined
var a = 2 // toda variavel sobe para o topo, mesmo sendo criada depois de ser chamada criado; issamento da variavel
console.log('a =', a)// 2


console.log('b =', b)
let b = 2 // let nao faz hoisting issamento, da erro
console.log('b =', b)