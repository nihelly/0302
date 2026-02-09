import React from 'react'

function exercicio5() {
    function SaudarCliente() {
        let NomeDigitado = document.getElementById("nome-cliente").value;
       let Mensagens = document.getElementById("Mensagem-saudacao");
       Mensagens.innerHTML = "Olá, " + NomeDigitado + "! Seja bem-vindo(a)!";
    }
  return (
    <div style={{border: '2px solid #40b846', marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: '#e9f8e5'}}>
        <h2>Exercício 5 - Saudação de Cliente</h2>
       <input type="text" id="nome-cliente" placeholder="Digite seu nome"/>
       <button onClick={SaudarCliente}>Saudar</button>
       <div id="Mensagem-saudacao" style={{marginTop: '10px', fontFamily: 'Arial', fontSize: '14px'}}></div>
    </div>
  )
}

export default exercicio5
