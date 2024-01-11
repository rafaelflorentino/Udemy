//import { useEffect, useState } from "react"

export const getStaticProps = async () => { // pagina static
    const resp = await fetch('http://localhost:3000/api/random')
    const dados = await resp.json()
        
    return{
        revalidate: 10, // regerar a pagina a cada 10 segundos,
        props:{
            valor: dados.valor
        }
    }
}

const Estatico = props => {

  /*  const [valor, setValor] = useState(0)

    async function obterValor(){
        const resp = await fetch('/api/random')
        const dados = await resp.json()
        setValor(dados.valor)
    }

    //useEffect(obterValor, [])*/

  /* function obterCliente(){//jeito 02
        fetch(`http://localhost:3000/api/random`)
        .then(resp => resp.json())
        .then(dados => setValor(dados.name)) 
    }

    useEffect(obterCliente, [])*/

    return (
        <div>
            <h1>Conteúdo Estático</h1>
            <h2>Último valor = {props.valor}</h2>
            
        </div>
       // <button onClick={obterValor}>Obter</button>
    )
}

export default Estatico