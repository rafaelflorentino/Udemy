import Layout from "../components/Layout"
export default function Jsx(){
    const a = 4
    const b = 3
    console.log( a * b)
    const obj = {nome: 'João', idade: 30}
    const titulo = <h1>Titulo 1</h1>

    function subtitulo() {
        return <h2> {"Titulo 2".toUpperCase()}</h2>
    }

    return (
        <Layout titulo ="Entendendo o JSX">
            <div>
                <h1>JSX e um conceito Central.</h1>
                {a * b}<br/>
                
                {Math.random()}<br/>
                
                {"muito legal".toUpperCase()}

                <p>
                    {JSON.stringify({nome: 'João', idade: 30})}
                </p>

                {titulo}<br/>

                {subtitulo()}

            </div>
        </Layout>
    )
}