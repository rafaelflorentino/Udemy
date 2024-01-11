const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar// erro o this desse falar nao esta apontando para saudacao
falar()// erro o this desse falar nao esta apontando para saudacao

const falarDePessoa = pessoa.falar.bind(pessoa)// bind passa/amarra o objeto para ser pego pelo this
falarDePessoa()