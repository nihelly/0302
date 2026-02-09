import React from 'react'

function Exercicio6() {
    function CalculoTotal () {
        let Produto = {
           Nome: "Caneta", Preco: 2.50, Impostos: 0.50
        };
        let resultado = document.getElementById("total-produto");
        let Total = Produto.Preco + Produto.Impostos;
        resultado.innerHTML = `Total: R$${Total.toFixed(2)}`;
    }
  return (
    <div style={{border: '2px solid #40b846', marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: '#e9f8e5'}}>
      <h2>Exercicio 6 - Cálculo do Total de um Produto</h2>
      <button onClick={CalculoTotal}>Calculo Total</button>
      <div id="total-produto"></div>
    </div>
  )
}

export default Exercicio6
