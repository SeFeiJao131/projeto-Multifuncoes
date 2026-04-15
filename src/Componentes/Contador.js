import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Clique</button>
    </div>
  );
}

export default Contador;