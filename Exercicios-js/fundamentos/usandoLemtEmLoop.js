for (let i = 0; i < 10; i++) {// let so cria dentro da função
    console.log(i)
     
 }
 
// console.log('i =', i)//Nao consegue acessar por causa do let


 const funcs = []

for (let i = 0; i < 10; i++) { // let tem memoria dos valores de i diferente de var
    funcs.push(function(){
        console.log(i)
    })
     
 }
 
 funcs[2]()
 funcs[8]()