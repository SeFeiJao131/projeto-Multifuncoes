import { useState } from "react";

function JogoDaVelha() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [fim, setFim] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const verificarVencedor = (tab) => {
    const linhas = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];

    for (let [a, b, c] of linhas) {
      if (tab[a] && tab[a] === tab[b] && tab[a] === tab[c]) {
        return tab[a];
      }
    }
    return null;
  };

  const jogar = (i) => {
    if (tabuleiro[i] || fim) return;

    const novo = [...tabuleiro];
    novo[i] = xTurn ? "X" : "O";

    const vencedor = verificarVencedor(novo);

    if (vencedor) {
      setMensagem(`🏆 Jogador ${vencedor} venceu!`);
      setFim(true);
    } else if (!novo.includes(null)) {
      setMensagem("🤝 Deu empate!");
      setFim(true);
    }

    setTabuleiro(novo);
    setXTurn(!xTurn);
  };

  const reiniciar = () => {
    setTabuleiro(Array(9).fill(null));
    setXTurn(true);
    setFim(false);
    setMensagem("");
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

      {mensagem && <div className="resultado">{mensagem}</div>}

      {fim && (
        <button onClick={reiniciar} style={{ marginTop: "15px" }}>
          Reiniciar
        </button>
      )}
    </div>
  );
}

export default JogoDaVelha;