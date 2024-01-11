/* Recebe um ano e diga se ele é bixesto ou não multiplos de 4 , não multiplos de 100, multiplos de 400 */
// Jeito 01
function calculaAnoBissexto(ano){
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0

    if((divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos){
        return 'Ano é Bissexto'
    }else{
        return 'Ano não é Bissexto'
    }
   // return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}
console.log(calculaAnoBissexto(4))
console.log(calculaAnoBissexto(2020))
console.log(calculaAnoBissexto(1900))
console.log(calculaAnoBissexto(2100))

// Jeito 02
function checarAnoBissexto(ano){
    return new Date(ano, 1, 29).getDate() === 29;
}
console.log('\n')
console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))