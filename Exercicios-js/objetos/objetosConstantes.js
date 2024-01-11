const pessoa = { nome: 'Joao'}// const sempre vai apontar para o mesmo endereço de memoria ex 123
pessoa.nome =  'Pedro'
console.log(pessoa)

//pessoa = {nome : 'Ana' } //não posso passar outro endereço de memória pra pessoa 

Object.freeze(pessoa) //congela o objeto nao posso fazer mmais nada no objeto, nem alterar nem deletar

pessoa.nome = 'Maria'
pessoa.end = "Rua ABC"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})//nao pode alterar referência onde a variavel foi criada nem o bojeto e seus dados
console.log(pessoaConstante)
