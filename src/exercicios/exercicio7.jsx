import React from 'react'

function Exercicio7() {
    function MostrarPrimeiraEntrega() {
        let entrega = ["Fazenda Primavera", "fazenda Sol Nascente", "fazenda alegria"];
        let campo = document.getElementById("primeira-entrega");
        campo.innerHTML = "Primeira entrega: " + entrega[0];
    }
     
     return (
    <div style={{border: '2px solid #40b846', marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: '#e9f8e5'}}>
      <h2>Exercicio 7 - Lista de Entregas</h2>
      <button onClick={MostrarPrimeiraEntrega}>Mostrar Primeira Entrega</button>
      <div id="primeira-entrega"></div>
    </div>
  )
}

export default Exercicio7
