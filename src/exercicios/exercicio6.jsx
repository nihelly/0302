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
    <div >
      <h2>Exercicio 6 - Cálculo do Total de um Produto</h2>
      <button onClick={CalculoTotal}>Calculo Total</button>
      <div id="total-produto" style={{marginTop: "10px", fontWeight: "bold"}}></div>
    </div>
  )
}

export default Exercicio6
