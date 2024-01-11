function funcionarOuNão(valor, chanceErro){
    return new Promise((resolve, reject)=>{
        try{     
            //con.log(`tempo`)// simulando um erro       
            if(Math.random() < chanceErro){
                reject('ocorreu um erro!')
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }
    })
}

funcionarOuNão('Testando...' , 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Especifico: ${err}`)
        )
    .then(() => console.log('Quase Fim!'))   
    .catch(err => console.log(`Erro Geral: ${err}`))//po o ctch no final para tratar os erros
    .then(() => console.log('Fim!'))