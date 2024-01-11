function criarProduto(nome ='geladeira', preco=2000) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto())
console.log(criarProduto('tv',500))


   // return `nome: ${nome} preço: ${preco}`
   // const produto = (nome, preco) => `nome: ${nome} preço: ${preco}`