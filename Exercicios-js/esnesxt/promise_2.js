// Callback Hell, callback dentro de callback, antes de surgir o Promise

setTimeout(function () {
    console.log('Executando Callback...')

    setTimeout(function () {
        console.log('Executando Callback2...')

        setTimeout(function () {
            console.log('Executando Callback3...')
        }, 2000)

    }, 2000)
}, 2000)// espera dois segundos começa função


function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('executando promise B...')
            resolve()
        }, tempo)

    })
}
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)