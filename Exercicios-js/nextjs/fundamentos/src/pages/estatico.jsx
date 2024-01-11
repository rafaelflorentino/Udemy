import Layout from '../components/Layout'

export async function getStaticProps(){ //gerar conteúdo estático
    return {
        props:{
            numero: Math.random()
        }
    }
}

export default function Estatico(props){
    return(
        <Layout titulo="conteudo Estatico">
            <div>{props.numero}</div>
        </Layout>
    )
}