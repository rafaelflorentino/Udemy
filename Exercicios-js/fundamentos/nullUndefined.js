/*
const a = {name: 'Teste'}

a
{name: "Teste"}
const b = a  // atribuição por referência (b recebeu o mesmo endereço de a)

b.name = 'opa' // valor de a foi allterado
"opa"
a
{name: "opa"}

---------------------------------
let c = 3
let d = c // como c é tipo primitivo foi copia por valor,  e não o endereço
d++

//c igual 3
//d e igual a 4

*/
let valor; //nao inicializado
console.log(valor);// undefined
//console.log(valor2);// is not defined ne foi definido

valor2 = null;// não tem valor dentro, nem endereço apontando // ausencia de valor

console.log(valor2);
//console.log(valor2.toString());// não pode acessar nullo pois da erro TypeError

const produto = {}
console.log(produto.preco);// undefined
produto.preco = undefined; // não usar
console.log(!!produto.preco);// converteu para booleam e deu false
//delete produto.preco // forma correta
console.log(produto);