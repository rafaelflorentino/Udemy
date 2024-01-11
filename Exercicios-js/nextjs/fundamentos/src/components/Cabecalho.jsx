export default function Cabecalho(props){
    console.log(props.titulo)
    //props e somente leitura, não pode aleterar
    return(
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}