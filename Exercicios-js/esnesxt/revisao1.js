// let e const
{
    var a = 2// nao tem escopo de bloco
    let b = 3// tem escopo de bloco
    console.log(b)// so funciona dentro do bloco
}
console.log(a)


// Template String
const produto = 'ipad'
console.log(`${produto}
 é 
caro!`)// pode quebrar linha

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]//ignora o segundo item o numero 2 
console.log(x,y)

const {idade: i, nome} = {idade: 9, nome: 'Ana'}

console.log(i, nome)