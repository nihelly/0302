import React from 'react'

function Exercicio10() {
    function RealizarCotacao() {
        let ValorDigitado = document.getElementById("input-preco").value;
        let Cotacao = {
            fornecedor: "AgroTop Distribuidora",
            valor: ValorDigitado,
            Status: 'Cotação em andamento',
        };
        document.getElementById("res-fornecedor").innerText = "Fornecedor: " + Cotacao.fornecedor;
        document.getElementById("res-valor").innerText = "Valor: R$ " + Cotacao.valor;
        document.getElementById("res-status").innerText = Cotacao.Status;
      }
  return (
    <div style={{border: '2px solid #40b846', marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: '#e9f8e5'}}>
      <h2>Exercicio 10 - Cotação e Compras</h2>
      <input 
      id= "input-preco"
      type="number"
      placeholder='Digite o valor da cotação.'
      />
      <button onClick={RealizarCotacao}>Realizar Cotação</button>
      <div>
        <p id="res-fornecedor"></p>
        <p id="res-valor"></p>
        <p id="res-status" style={{fontWeight: 'bold', color: 'orange'}}></p>
      </div>
    </div>
  )
}

export default Exercicio10
