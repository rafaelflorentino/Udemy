/* Recebe número (1 a 12) e retorna o nome do mês correspondente*/
// Jeito 01
function nomeDoMes(numero) {
    switch (numero) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
    }
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(2))
console.log(nomeDoMes(3))
console.log(nomeDoMes(4))
console.log(nomeDoMes(5))
console.log(nomeDoMes(6))
console.log(nomeDoMes(7))
console.log(nomeDoMes(8))
console.log(nomeDoMes(9))
console.log(nomeDoMes(10))
console.log(nomeDoMes(11))
console.log(nomeDoMes(12))


// Jeito 02
function voltaMes(numero) {
    const mapeamento = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return mapeamento[--numero]

}

console.log('\n')
console.log(voltaMes(1))
console.log(voltaMes(6))
console.log(voltaMes(12))
