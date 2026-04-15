import { useState } from "react";

function BuscadorCEP() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null);

  const buscar = async () => {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    setDados(data);
  };

  return (
    <div>
      <h2>Buscar CEP</h2>
      <input value={cep} onChange={(e) => setCep(e.target.value)} />
      <button onClick={buscar}>Buscar</button>

      {dados && (
        <div>
          <p>{dados.logradouro}</p>
          <p>{dados.bairro}</p>
          <p>{dados.localidade}</p>
        </div>
      )}
    </div>
  );
}

export default BuscadorCEP;