function soBoaNoticia(nota){
    if (nota >= 7){
        console.log('Aprovado com '+ nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)

function soSeForVerdade(valor){
    if (valor){
        console.log('É verdade ... '+ valor)
    }
}
soSeForVerdade()//falso
soSeForVerdade(undefined)//falso
soSeForVerdade(null)//falso
soSeForVerdade(NaN)//falso
soSeForVerdade('')//falso
soSeForVerdade(0)//falso
soSeForVerdade(-1)//Verdadeiro
soSeForVerdade(' ')//Verdadeiro
soSeForVerdade('?')//Verdadeiro
soSeForVerdade([])//Verdadeiro
soSeForVerdade([1,2])//Verdadeiro
soSeForVerdade({})//Verdadeiro