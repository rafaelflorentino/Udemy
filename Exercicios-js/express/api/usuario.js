function salvar(req, res){
    res.send('Usuario > salvar')
}

function obter(req, res){
    res.send('Usuario > obter')
}

module.exports = { salvar, obter }
//module.exports = { salvar: salvar, obter: obter } // como nome é igual omite: chave:valor