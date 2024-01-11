const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90}',
    '{ "nome": "kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)


const resultado2 = carrinho.map(paraObjeto)
console.log(resultado2)

