export default class Cliente{
    #id: string // private id: string
    #nome: string // private nome: string
    #idade: number //private idade: number

    constructor(nome: string, idade: number, id: string = null){
        this.#nome = nome // this.nome = nome
        this.#idade = idade
        this.#id = id
    }
    static vazio(){//cliente vazio, não precisa instanciar
        return new Cliente('', 0)
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }
}