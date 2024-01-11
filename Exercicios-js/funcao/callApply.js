function getPreco(imposto =0, moeda ='R$'){
    return `${moeda} ${this.preco  * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco : 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20 // valor padrão, caso não seja passado
global.desc = 0.1 // valor padrão

console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))// Usando o CALL para chamar a função, passando um objeto
console.log(getPreco.apply(carro))// Usando o APPLY para chamar a função, passando um objeto

console.log(getPreco.call(carro, 0.17, '$'))// passou: objeto carro(preço,desc), imposto, moeda para função
console.log(getPreco.apply(carro, [0.17, '$']))// passou: objeto carro(preço,desc), e uma Array[imposto, moeda] percisa passar uma array