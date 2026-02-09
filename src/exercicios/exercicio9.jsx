import React from 'react'

function Exercicio9() {
    function VerificarEstoque() {
        let Item = {
            quantidade: 5
        };
        let caixa = document.getElementById("Estoque-Status");
        if (Item.quantidade > 0) {
            caixa.innerHTML = "Estoque disponível: " + Item.quantidade + " unidades";
            caixa.style.color = "green";
        } else {
            caixa.innerHTML = "Produto esgotado";
            caixa.style.color = "red";
        }
    }
  return (
    <div style={{border: '2px solid #40b846', marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: '#e9f8e5'}}>
      <h2>Exercicio 9 - Estoque</h2>
      <button onClick={VerificarEstoque}>Verificar Estoque</button>
      <div id="Estoque-Status"></div>
    </div>
  )
}

export default Exercicio9