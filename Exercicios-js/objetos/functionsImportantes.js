const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))// tras as chaves
console.log(Object.values(pessoa))//tras os valores
console.log(Object.entries(pessoa))//tras as chaves e valores

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {// usando o destruct na array para mostrar nome chave e valor
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,// aparece na lista de chaves, caso false nao vai aparecer na lista mas vai dar pra acessar as varivaeis
    writable: false,//o valor não pode ser alterado
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' //o valor não pode ser alterado por causa do writable: false
console.log(pessoa.dataNascimento)

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a:4}
const obj = Object.assign(dest, o1, o2)// concatena todos os elementos, e sobrescreve os repetidos com ultimo valor passado
console.log(dest)

Object.freeze(obj)// congela objeto, não da para alterar
obj.c = 1234
console.log(obj)
