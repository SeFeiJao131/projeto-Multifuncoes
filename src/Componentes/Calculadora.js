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
    <div className="container">
      <h2>Calculadora</h2>

      <input value={valor} readOnly />

      <div className="grid-calc">
        <button onClick={() => setValor(valor + "1")}>1</button>
        <button onClick={() => setValor(valor + "2")}>2</button>
        <button onClick={() => setValor(valor + "3")}>3</button>
        <button onClick={() => setValor(valor + "+")}>+</button>

        <button onClick={() => setValor(valor + "4")}>4</button>
        <button onClick={() => setValor(valor + "5")}>5</button>
        <button onClick={() => setValor(valor + "6")}>6</button>
        <button onClick={() => setValor(valor + "-")}>-</button>

        <button onClick={() => setValor(valor + "7")}>7</button>
        <button onClick={() => setValor(valor + "8")}>8</button>
        <button onClick={() => setValor(valor + "9")}>9</button>
        <button onClick={() => setValor(valor + "*")}>*</button>

        <button onClick={() => setValor("")}>C</button>
        <button onClick={() => setValor(valor + "0")}>0</button>
        <button onClick={calcular}>=</button>
        <button onClick={() => setValor(valor + "/")}>/</button>
      </div>
    </div>
  );
}

export default Calculadora;