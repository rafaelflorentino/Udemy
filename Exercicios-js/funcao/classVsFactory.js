// Essa Maneira se estiver dentro de outra função como uma função onclik o this não vai conseguir apontar pra variavel lugar correto
//CLASS
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
//document.getElementsByTagName('body')[0].onclick = p1.falar()


// Forma sem ter esse problema do this aponta para variavel correta, (factory tem o contexto lexico correto)
// FACTORY
const criarPessoa = nome => {
    return{
        falar: ( )=> console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Carlos')
p2.falar()