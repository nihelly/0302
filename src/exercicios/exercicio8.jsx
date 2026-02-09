import React from 'react'

function Exercicio8() { function VerLocal() {
        let analise = {
            id: 1,
            propiedade: {
                Nome: "Terra Boa",
                Cidade: "Muriaé"
            }
        };
        let info = document.getElementById("info-local");
        info.innerHTML = "Local: " + analise.propiedade.Nome + " - " + analise.propiedade.Cidade;
    }
  return (
    <div style={{border: '2px solid #40b846', marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: '#e9f8e5'}}>
      <h2>Exercicio 8 - Relatório</h2>
      <button onClick={VerLocal}>Ver Local</button>
      <div id="info-local"></div>
    </div>
  )
}

export default Exercicio8