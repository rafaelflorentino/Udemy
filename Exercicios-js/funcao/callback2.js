const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem Call Back Manual
const notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Com Call Back
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

//Com Call Back e Arrow Function
const notasBaixas3 = notas.filter(nota => nota <7)
console.log(notasBaixas3)

//Com Call Back e Arrow Function n Variável
const notasMenorQue7 = nota => nota <7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)