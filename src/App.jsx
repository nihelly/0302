import { useState } from 'react'
import Exercicio4 from './exercicios/exercicio4'
import Exercicio5 from './exercicios/exercicio5'
import Exercicio6 from './exercicios/exercicio6'
import Exercicio7 from './exercicios/exercicio7'
import Exercicio8 from './exercicios/exercicio8'
import Exercicio9 from './exercicios/exercicio9'
import Exercicio10 from './exercicios/exercicio10'
import './CSS/global.css'

function App() {
  return (
    <>
    <div className='body'>
    <h1 className='title'> TECNICO DE INFORMÀTICA - SENAI</h1>
         <p className='sub-title'>Fundamentos de Manipulação de Dados - DOM/VDOM</p>
      <div>
        <Exercicio4 />
        <Exercicio5 />
        <Exercicio6 />
        <Exercicio7 />
        <Exercicio8 />
        <Exercicio9 />
        <Exercicio10 />
      </div>
      </div>
    </>
  )
}

export default App
