import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    cliente, 
    clientes, 
    novoCliente, 
    salvarCliente,
    selecionarCliente,
    excluircliente,        
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className= {`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-600
      text-white
    `}>
     <Layout titulo="Cadastro Simples">
      {tabelaVisivel ? (
        <>
          <div className="flex justify-end">
            <Botao className="mb-4 from-yellow-300 to-yellow-500"
                   onClick={novoCliente}>
                   Novo Cliente</Botao>
          </div>  
              
         <Tabela clientes={clientes} 
            clienteSelecionado={selecionarCliente} 
            clienteExcluido={excluircliente}
            />
        </>
      ):(
        <Formulario
          cliente={cliente} 
          clienteMudou={salvarCliente}
          cancelado={exibirTabela}
          />
      )}
     </Layout>
    </div>
  )
}
