 function teste(num){
    if(num >7)// sempre usar as {} para executar mais de uma sentença detro do IF
    console.log(num)//sem as chaves {} a função so vai ate a primeira setença
    console.log('Final')//esta fora do IF vai imprimir tda vexz que chamar a função

 }

//teste(6)
//teste(8)

 function teste1(num){
    if(num >7){ //correto
    console.log(num)
    console.log('Final')
    }

 }
 teste1(6)
 teste1(8)



 function teste2(num){
    if(num >7); // cuidado com ; não usar em estruturas de cotrole, interrompeu a senteça, virou uma senteça vazia
    console.log(num)// vai se sempre impresso quando chamar a função por caus do ; acima
 }

 teste2(8)

 function teste2(num){
    if(num >7)
        console.log(num)    
 }

 teste2(5)
 teste2(8)