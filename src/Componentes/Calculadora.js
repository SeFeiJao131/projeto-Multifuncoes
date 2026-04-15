import { useState } from "react";

function Calculadora() {
  const [valor, setValor] = useState("");

  return (
    <div>
      <h2>Calculadora</h2>
      <input value={valor} readOnly />
      <div>
        <button onClick={() => setValor(valor + "1")}>1</button>
        <button onClick={() => setValor(valor + "2")}>2</button>
        <button onClick={() => setValor(valor + "+")}>+</button>
        <button onClick={() => setValor(eval(valor))}>=</button>
      </div>
    </div>
  );
}

export default Calculadora;