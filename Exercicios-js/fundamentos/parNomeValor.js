const saudacao = 'Opa' // contexto 1

function exec(){

    const saudacao = 'Falaaa' // contexto 2
    return saudacao

}

console.log(saudacao)
console.log(exec())
console.log(saudacao)

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(cliente);