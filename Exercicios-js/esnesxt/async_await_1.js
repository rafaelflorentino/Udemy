function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo) //setTimeout(function() {resolve()}, tempo)

    })
}

/*esperarPor(2000)
    .then(() =>  console.log('executando promise 1...'))
    .then(esperarPor)//esperarPor(2000)
    .then(() =>  console.log('executando promise 2...'))
    .then(esperarPor)//esperarPor(2000)
    .then(() =>  console.log('executando promise 3..')) */

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() { // assyc todos metodos sao executado na hora ao mesmo tempo
    let valor = await retornarValor() // await faz esperar a função terminar até o próximo método
    //let valor = retornarValorRapido() //precisa por o await pra extrair o o valor e nao vir uma promisse : let await valor

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor +1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor +2}...`)  
    
    return valor + 3
}

executar().then(console.log)// async sempre retorna uma promise, precisa do .then pra receber o retorno

async function executarDeVerdade(){ //como é uma funcao assincrona e retorna um porimise 
    const valor = await executar() //pode receber valor direto na const valor sem then
    console.log(valor)
}
executarDeVerdade()

async function retornarValorRapido(){
    return 20
}