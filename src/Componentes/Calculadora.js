import { useState } from "react";

function Calculadora() {
  const [valor, setValor] = useState("");

  const calcular = () => {
    try {
      setValor(eval(valor));
    } catch {
      setValor("Erro");
    }
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <input value={valor} readOnly />
      <div>
        <button onClick={() => setValor(valor + "1")}>1</button>
        <button onClick={() => setValor(valor + "2")}>2</button>
        <button onClick={() => setValor(valor + "+")}>+</button>
        <button onClick={calcular}>=</button>
      </div>
    </div>
  );
}

export default Calculadora;