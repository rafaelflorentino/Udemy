import React from 'react'

//import React, { Fragment } from 'react'

//export default () => <h1>Bom dia Fulano!</h1>

export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Bom dia !</h2>
]

    /*Não aparece no codigo <React.Fragment>  forma reduzida*/
   /*  <Fragment> 
        <h1>Bom dia {props.nome}!</h1>
        <h2>Idade: {props.idade}</h2>
        <h3>Até breve</h3>
     </Fragment>*/

    /* // Aparece no codigo <div id="teste">
    <div id="teste">
        <h1>Bom dia {props.nome}!</h1>
        <h2>Idade: {props.idade}</h2>
        <h3>Até breve</h3>
    </div> */


    /*Não aparece no codigo <React.Fragment>*/
    /*<React.Fragment> 
        <h1>Bom dia {props.nome}!</h1>
        <h2>Idade: {props.idade}</h2>
        <h3>Até breve</h3>
    </React.Fragment>*/

