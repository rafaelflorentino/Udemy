import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'

/*import BomDia from './componentes/BomDia'
ReactDOM.render(<BomDia nome="Rafael" idade={28} />, document.getElementById('root'))*/


import {BoaTarde, BoaNoite } from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'

import Filho from './componentes/Filho'

//import Multi from './componentes/Multiplos'  <Multi.BoaTarde nome="Ana"/>

ReactDOM.render(
    <div>
        <BoaTarde nome="Ana"/>
        <BoaNoite nome="Bia"/>

        <Saudacao tipo="Bom dia" nome="João"/>

        <Pai nome ="Paulo" sobrenome="Silva"> 
            <Filho nome="Pedro" sobrenome="Silva" />
            <Filho nome="Paulo" sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Silva" />
        </Pai>
        
    </div>
, document.getElementById('root'))