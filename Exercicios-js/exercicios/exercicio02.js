/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */
// Jeito 01
function calcularTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3) {
        console.log(`Lado1 = ${lado1}, Lado2 = ${lado2} , Lado3 = ${lado3}`)
        console.log('Classificação: Triangulo Equilátero(Todos lados Iguais)')
        console.log('')

    } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        console.log(`Lado1 = ${lado1}, Lado2 = ${lado2} , Lado3 = ${lado3}`)
        console.log('Classificação: Triangulo Escaleno(Todos lados Diferentes)')
        console.log('')

    } else {
        console.log(`Lado1 = ${lado1}, Lado2 = ${lado2} , Lado3 = ${lado3}`)
        console.log('Classificação: Triangulo Isóceles(Dois lados Iguais)')
        console.log('')
    }

}

calcularTriangulo(10, 10, 10);// Equilátero
calcularTriangulo(5, 10, 10);// Isóceles
calcularTriangulo(5, 8, 10);// Escaleno

//Jeito 02

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));