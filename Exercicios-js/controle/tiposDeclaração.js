//function declaration
console.log(soma(2,3))// consegue chamar antes da função ser declarada, interpretador js carrega todas as funçoes primeiro

function soma(x,y){
    return x + y
}

//function expression anônima
//console.log(sub(4,3))// não funciona em functions expression, chamar sem declarar antes
const sub = function (x, y){
    return x - y
}

// named function expression

const mult = function mult(x, y){
    return x * y
}
console.log(soma(2,5))
console.log(sub(2,5))
console.log(mult(2,5))
