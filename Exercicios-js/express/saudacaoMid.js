// Saudação e uma função Middleware
function saudacao(nome) {
    // Código aqui antes do return só vai ser executado uma única vez
    return function(req, res, next){ // Resultado da função retorna essa outra função, possibilitando voltar ao fluxo código
        console.log('Seja bem vindo', nome) // Sempre que receber uma nova requisição esse código sera executado.
        next()
    } 
}

// Exporta a função para poder ser accesada por outros arquivos
module.exports = saudacao