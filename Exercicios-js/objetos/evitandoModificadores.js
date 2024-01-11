// Object.preventExtensions (não permite inserir novos atributos, mas pode alterar e excluir)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha' //pode alterar
produto.descricao = 'Borracha escolar branca' // pode inserir novo atributo
delete produto.tag // pode deletar
console.log(produto)

// Object.seal (não permite inserir novos atributos, nem deletar, mas permite alterar)

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))//selando objeto

pessoa.sobrenome = 'Silva' // não permite criar/adicionar novos atributos
delete pessoa.nome // não permite deletar
pessoa.idade = 29 // permite alterar
console.log(pessoa)


// Object.freeze = seal + valores constantes