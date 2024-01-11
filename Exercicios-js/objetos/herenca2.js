Object.prototype.attr0 = '0'// não fazer isso direto no prototype

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }// forma 1 de linkar o prototype
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3 )

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }     
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing velocidade da ferrari sobrepoe a velocidade de carro
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.velAtual}Km/h de ${super.status()}`
    } 
}

Object.setPrototypeOf(ferrari, carro)// forma 2 de linkar o prototype
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
