//Função sem Retorno

function imprirSoma(a, b){
    console.log(a +b)
}

imprirSoma(2,3)
imprirSoma(2)
imprirSoma(2,3,4,5,6,7) 

//Função com Retorno
 function soma(a=0, b=0){
     return a+b 
 }

 console.log(soma(5, 5));
 console.log(soma(2));