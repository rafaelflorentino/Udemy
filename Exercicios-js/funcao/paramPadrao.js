function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c

}
console.log(soma1(), soma1(1, 2, 3), soma1(0, 0, 0))// o zeros não soma, lê como falso e subistitui por 1 por causa do || ou

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se a nao for informado põe 1
    b = 1 in arguments ? b : 1 // verifica se no índice 1(b) tem número, se não põe 1
    c = isNaN(c) ? 1 : c // se nao for numero poe 1
    return a + b + c

}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padraõ do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
