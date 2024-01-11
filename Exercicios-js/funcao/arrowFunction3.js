let compraraComThis = function (param){
    console.log( this === param)
}

compraraComThis(global)

const obj = {}
compraraComThis = compraraComThis.bind(obj)
compraraComThis(global)
compraraComThis(obj)

let compraraComThisArrow = param => console.log(this === param) // arrow function definiu novo this
compraraComThisArrow(global)// não aponta mais pra global
compraraComThisArrow(module.exports)//novo this dentro do modulo

compraraComThisArrow = compraraComThisArrow.bind(obj)//Arrow function e mais forte que o bind, continua apontando pela arrow function
compraraComThisArrow(obj)// this do bind nao vai apontar para obj pois a arrow function ja tinha apontado para module.exports
compraraComThisArrow(module.exports)// this da arrow function e mais forte