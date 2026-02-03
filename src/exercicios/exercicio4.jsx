import React from 'react';

function Exercicio4 () {
    function DestacarAtraso() {
        let caixa = document.getElementById("mensagem-atraso");
        caixa.style.color = "red";
        caixa.innerHTML = "Pagamento atrasado!";
} {
    return (
        <div>
            <h2>Exercicio 4 - Mensagem de Atraso</h2>
            <div id="mensagem-atraso" style={{color: "black"}}>Status: Normal</div>
            <button onClick={DestacarAtraso}>Destacar Atraso</button>
        </div>
    );
}
}
export default Exercicio4;