const anonimo = process.argv.indexOf('-a') !== -1

//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome: ')// saida de dados no terminal
    process.stdin.on('data', data => {// entrada de dados quando usuario aperta enter evento on
        const nome= data.toString().replace('\n', '')

    process.stdout.write(`  Fala ${nome}!!\n`) // Saida de dados no terminal
    process.exit()
    })
}