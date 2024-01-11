// IIFE -> Immediately Invoked Function Expression

// dentro da função autoexecutavel
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()


// Direto no escopo Global
console.log('Será executado ')
console.log('escopo mais abrangente')
