/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/
// Jeito 01
function verificaNota(nota) {
    let conceitos = []
    for(let i = 0; nota.length > i; i++){
        if(nota[i] >= 0.0 && nota[i] <= 4.9){
            console.log(`Nota ${nota[i] } : D`)
            conceitos.push('D')
        }
        else if(nota[i] >= 5.0 && nota[i] <= 6.9){
            console.log(`Nota ${nota[i] } : C`)
            conceitos.push('C')
        }    
        else if(nota[i] >= 7.0 && nota[i] <= 8.9){
            console.log(`Nota ${nota[i] } : B`)
            conceitos.push('B')
        }     
        else if(nota[i] >= 9.0 && nota[i] <= 10.0){
            console.log(`Nota ${nota[i] } : A`)
            conceitos.push('A')
        }else {
            conceitos.push('Nota inválida')       
       }  

    }

    return conceitos
}
const vetor = [4.9, 6.9, 8.9, 10]

console.log(verificaNota(vetor))
console.log(vetor)

// Jeito 02

function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)