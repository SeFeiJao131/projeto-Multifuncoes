import { useState } from "react";

function Calculadora() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    try {
      // substitui símbolos pra funcionar corretamente
      const expressao = valor.replace(/×/g, "*").replace(/÷/g, "/");

      // usa Function ao invés de eval (mais aceito)
      const res = new Function("return " + expressao)();

      setResultado(res);
    } catch {
      setResultado("Erro");
    }
  };

  return (
    <div className="container">
      <h2>Calculadora</h2>

      <input value={valor} readOnly />
      <p>{resultado}</p>

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
        <button onClick={() => setValor(valor + "*")}>×</button>

        <button onClick={() => setValor("")}>C</button>
        <button onClick={() => setValor(valor + "0")}>0</button>
        <button onClick={calcular}>=</button>
        <button onClick={() => setValor(valor + "/")}>÷</button>
      </div>
    </div>
  );
}

export default Calculadora;