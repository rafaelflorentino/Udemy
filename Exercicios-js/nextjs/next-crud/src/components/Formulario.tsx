import { useState} from "react";
import Cliente from "../core/Cliente"
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return(
        <div>{id ?( //só renderiza se tiver setado o id
            <Entrada 
                somenteLeitura
                texto="Codigo"
                valor={id}
                className="mb-5" 
             />
        ): false}           
            <Entrada texto="Nome" valor={nome} 
                valorMudou={setNome} className="mb-5" />

            <Entrada texto="Idade" tipo="number" 
            valor={idade} valorMudou={setIdade} />
            
            <div className="mt-7 flex justify-end">
                <Botao cor="blue" className="mr-2  from-blue-500 to-blue-800"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="purple" className=" from-purple-500 to-purple-800" onClick={props.cancelado} >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}