import React from 'react';

function Exercicio4 () {
    function DestacarAtraso() {
        let caixa = document.getElementById("mensagem-atraso");
        caixa.style.color = "red";
        caixa.innerHTML = "Pagamento atrasado!";
} {
    return (
        <div style={{border: '2px solid #40b846', marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: '#e9f8e5'}}>
            <h2>Exercicio 4 - Mensagem de Atraso</h2>
            <div id="mensagem-atraso" style={{color: "black"}}>Status: Normal</div>
            <button onClick={DestacarAtraso}>Destacar Atraso</button>
        </div>
    );
}
}
export default Exercicio4;