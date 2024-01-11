import Layout from "../components/Layout";
import { useState } from "react";

export default function Estado(){

    const state = useState(0)
   /* jeito 01
    let numero = state[0]
    let alterarNumero = state[1] // para alterar valor só assim
    */
    //jeito 02
    const [numero, setNumero] = useState(0)//Hooks

    function incrementar(){
        // numero =+ 1 //nao funciona
       // alterarNumero(numero + 1)  funciona
       setNumero(numero + 1)    
    }

    return(
        <Layout titulo="componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}