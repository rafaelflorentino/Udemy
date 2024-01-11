// recebe um numero e retorna se foi o número sorteado ou não

function funcaoDaSorte(numero) {
    let min = 1
    let max = 10
    let aleatorio = parseInt(Math.random() * (max - min + 1) + min)

    return aleatorio === numero
        ? `Parabens! O número sorteado foi o: ${aleatorio}`
        : `Que pena! O número sorteado foi o ${aleatorio}`
}
console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))