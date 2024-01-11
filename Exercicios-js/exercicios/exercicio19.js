/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function calculaValor(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return quantidade + ' Cachorro(s) Quente, Valor a ser Pago: ' + quantidade * 3.0
        case 200:
            return quantidade + ' Hamburguer(s) Simples, Valor a ser Pago: ' + quantidade * 4.0
        case 300:
            return quantidade + ' Cheesburguer(s), Valor a ser Pago: ' + quantidade * 5.5
        case 400:
            return quantidade + ' Bauru(s), Valor a ser Pago: ' + quantidade * 7.5
        case 500:
            return quantidade + ' Refrigerante(s), Valor a ser Pago: ' + quantidade * 3.5
        case 600:
            return quantidade + ' Suco(s), Valor a ser Pago: ' + quantidade * 2.8
        default:
            return `Produto com codigo: ${codigo} não existente.`
    }

}
console.log(calculaValor(100, 2))
console.log(calculaValor(200, 3))
console.log(calculaValor(300, 2))
console.log(calculaValor(400, 1))
console.log(calculaValor(500, 2))
console.log(calculaValor(600, 1))
console.log(calculaValor(700, 1))