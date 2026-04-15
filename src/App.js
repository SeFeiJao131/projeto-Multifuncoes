import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Contador from "./components/Contador";
import JogoDaVelha from "./components/JogoDaVelha";
import Calculadora from "./components/Calculadora";
import BuscadorCEP from "./components/BuscadorCEP";

function App() {
  const [pagina, setPagina] = useState("todo");

  return (
    <div>
      <Header setPagina={setPagina} />

      {pagina === "todo" && <TodoList />}
      {pagina === "contador" && <Contador />}
      {pagina === "jogo" && <JogoDaVelha />}
      {pagina === "calc" && <Calculadora />}
      {pagina === "cep" && <BuscadorCEP />}
    </div>
  );
}

export default App;