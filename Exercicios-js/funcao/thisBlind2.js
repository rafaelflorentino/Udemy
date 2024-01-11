function Pessoa(){
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // usa o bind(this) pra amarrar a pessoa 
}

//new Pessoa

function Pessoa2(){
    this.idade = 0
    const self = this///salva o this no self

    setInterval(function() {
        self.idade++ // acesa o this salvo no self
        console.log(self.idade)// acesa o this salvo no self
    }, 1000)
}

new Pessoa2