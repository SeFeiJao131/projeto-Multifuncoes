import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Contador</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Clique</button>
    </div>
  );
}

export default Contador;