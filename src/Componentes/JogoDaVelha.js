import { useState } from "react";

function JogoDaVelha() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const jogar = (i) => {
    if (tabuleiro[i]) return;

    const novo = [...tabuleiro];
    novo[i] = xTurn ? "X" : "O";
    setTabuleiro(novo);
    setXTurn(!xTurn);
  };

  return (
    <div className="container">
      <h2>Jogo da Velha</h2>

      <div className="grid">
        {tabuleiro.map((v, i) => (
          <button key={i} onClick={() => jogar(i)} className="cell">
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JogoDaVelha;