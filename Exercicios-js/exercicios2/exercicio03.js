/* Função que recebe dois parmetros, quantidade de horas trabalhadas no mes, e valor da hora, retorna salario - 30% de imposto, 
Salario igual a R$ X */

function calcularSalarioBruto(horasTrabalhadas, valorHora) {
    salarioBruto = horasTrabalhadas * valorHora

    return `Salário Bruto igual a R$: ${salarioBruto}`
}

function calcularSalarioLiquido(horasTrabalhadas, valorHora) {
    let salarioBruto = valorHora * horasTrabalhadas
    let impostos = salarioBruto * 0.3
    let salarioLiquido = salarioBruto - impostos
   
    return `Salário Liquido igual a R$: ${salarioLiquido}, Valor Impostos Descontado R$: ${impostos}`
}

console.log(calcularSalarioBruto(40, 30))
console.log(calcularSalarioLiquido(40, 30))