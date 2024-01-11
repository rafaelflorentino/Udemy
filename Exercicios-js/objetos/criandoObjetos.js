// Usando a notação literal
const obj1 = {}
console.log(obj1)

//Objeto em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

// Funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome // variavel publica
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Nootebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joão',7980, 4)
const f2 = criarFuncionario('maria',11400, 1)
console.log(f1.nome,f1.getSalario())
console.log(f2.nome,f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)