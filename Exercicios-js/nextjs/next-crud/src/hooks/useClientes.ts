import ClienteRepositorio from "../core/ClienteRepositorio"
import Cliente from "../core/Cliente"
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

    const{tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const[cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const[clientes, setClientes] = useState<Cliente[]>([])
    //const[visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    
    useEffect(obterTodos, [])
  
    function obterTodos(){
      repo.obterTodos().then(clientes =>{
        setClientes(clientes)
        //setVisivel('tabela')
        exibirTabela()
      })
    }
  
   /* const clientes = [
      new Cliente('Ana', 34, '1'),
      new Cliente('Bia', 45, '2'),
      new Cliente('Carlos', 23, '3'),
      new Cliente('Pedro', 54, '4'),
    ]*/
  
    function selecionarCliente(cliente: Cliente){
      setCliente(cliente) 
      //setVisivel('form') 
      exibirFormulario()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio()) 
      //setVisivel('form')
      exibirFormulario()
   }
  
    async function salvarCliente(cliente: Cliente){
       await repo.salvar(cliente)
       obterTodos()
    }
  
    async function excluircliente(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }

    return{        
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluircliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }  
}