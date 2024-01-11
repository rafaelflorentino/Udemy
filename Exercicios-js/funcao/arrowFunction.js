let dobro1 = function (a) {
    return 2 * a
}
console.log(dobro1(2))


dobro2 = (a) => {
    return 2 * a
}
console.log(dobro2(4))


dobro3 = a => 2 * a //ARROW FUNCTION return implicito

console.log(dobro3(Math.PI))


let ola = function(){
    return 'Olá 1'
}

ola2 = () => 'Olá 2' // precisa por os () na arrow function, tem que passar paremtro mesmo se for vazio ()
ola3 = _ => 'Olá 3'// ou pode por no lugar underline, nao pode deixar sem () ou sem _

console.log(ola ())
console.log(ola2 ())
console.log(ola3 ())