import Link from 'next/link'
import Navegador from "../components/Navegador"

export default function Inicio(){
    return (
        
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo"  cor="darkViolet"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegação #1" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #2" destino="/cliente/sp-2/321" cor="blue"/>
            <Navegador texto="Componente Estado" destino="/estado" cor="pink"/>
            <Navegador texto="Integração API #1" destino="/integracao_1" cor="#00ffc8"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fe9515"/>
            
        </div>
    )
}