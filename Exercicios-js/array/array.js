console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']//notação literal usar sempre
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])// se nao tem reorna undefinedy


aprovados[3]= 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9]= 'Rafael' //os indices 4,5,6,7,8 como estao vazios ficam com undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort()// sort organiza em ordem alfabética
console.log(aprovados)

delete aprovados[1]//apaga e fica undefined

console.log(aprovados[1])
console.log(aprovados[2])


aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')// exclui a partir do indice 1  2 elementos(1 e 2), e adiciona elemento1 e elemento2
//aprovados.splice(1, 0, 'Elemento1', 'Elemento2') //não excluir nenhum e adicionar apartir da posicao 1 elemento1 e elemento2
console.log(aprovados)