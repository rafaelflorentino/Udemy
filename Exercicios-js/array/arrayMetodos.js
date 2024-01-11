const pilotos = ['Vettel', 'Alonso', 'Rainkkonen', 'Massa']
pilotos.pop()// remove o ultimo elemento da lista
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()// remove o primeiro elemnto da lista
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona no começo da lista
console.log(pilotos)

//Adicionar Splice
pilotos.splice(2,0, 'Bottas', 'Massa')// adiciona antes do indice 2 Bottas e Massa (entram nos indices 2 e 3) o antigo indice 2 vira 4
console.log(pilotos)

//Remover Splice
pilotos.splice(3,1)// contando apartir do indice 3 remove 1 elemento
console.log(pilotos)

// Slice Novo array
const algunsPilotos1 = pilotos.slice(2)//pega a partir do indice 2 pra frente e gera nova array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)//pega a partir do indice 1 até indice 3 o 4 não entra
console.log(algunsPilotos2)