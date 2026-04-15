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
    <div>
      <h2>Jogo da Velha</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)" }}>
        {tabuleiro.map((v, i) => (
          <button key={i} onClick={() => jogar(i)}>
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JogoDaVelha;