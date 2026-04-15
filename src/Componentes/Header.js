function Header({ setPagina }) {
  return (
    <header className="header">
      <h1>MultiApp</h1>

      <div className="nav">
        <button onClick={() => setPagina("todo")}>To-Do</button>
        <button onClick={() => setPagina("contador")}>Contador</button>
        <button onClick={() => setPagina("jogo")}>Jogo</button>
        <button onClick={() => setPagina("calc")}>Calculadora</button>
        <button onClick={() => setPagina("cep")}>CEP</button>
      </div>
    </header>
  );
}

export default Header;