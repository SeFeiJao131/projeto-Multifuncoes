import { useState } from "react";
import Header from "./Componentes/Header";
import TodoList from "./Componentes/TodoList";
import Contador from "./Componentes/Contador";
import JogoDaVelha from "./Componentes/JogoDaVelha";
import Calculadora from "./Componentes/Calculadora";
import BuscadorCEP from "./Componentes/BuscadorCEP";

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