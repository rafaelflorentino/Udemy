/* recebe base e altura do triangulo e retorna a are do triangulo, precisão de 2 casas decimais */

function areaDoTriangulo(base, altura){
   let area = (base * altura) /2

    return area.toFixed(2)
}

console.log(areaDoTriangulo(10, 15))
console.log(areaDoTriangulo(7, 9))
console.log(areaDoTriangulo(9.25, 13.1))