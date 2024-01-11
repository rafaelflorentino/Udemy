function tratarErrorLancar(erro){
   // throw new Error('...')
   // throw 10
   // throw true
   //  throw 'mensagem'
   throw{
       nome: erro.nome,
       msg: erro.message,
       date: new Date
   }
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!!!')//com erro name != nome
        //console.log(obj.nome.toUpperCase()+ '!!!!!') correto
    } catch(e){
        tratarErrorLancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)