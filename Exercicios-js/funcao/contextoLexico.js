const valor = 'Global'

function minhaFuncao(){
    console.log(valor)//vai usar o valor 'Global'
}

function exec(){
    const valor = 'Local' // não vai usar 'Local'
    minhaFuncao()
}
exec()