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
    <div className="container">
      <h2>Buscar CEP</h2>

      <input
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
      />

      <button onClick={buscar}>Buscar</button>

      {dados && (
        <div>
          <p><strong>Rua:</strong> {dados.logradouro}</p>
          <p><strong>Bairro:</strong> {dados.bairro}</p>
          <p><strong>Cidade:</strong> {dados.localidade}</p>
        </div>
      )}
    </div>
  );
}

export default BuscadorCEP;