function Header({ setPagina }) {
  return (
    <header>
      <button onClick={() => setPagina("todo")}>To-Do List</button>
      <button onClick={() => setPagina("contador")}>Contador</button>
      <button onClick={() => setPagina("jogo")}>Jogo da Velha</button>
      <button onClick={() => setPagina("calc")}>Calculadora</button>
      <button onClick={() => setPagina("cep")}>Buscar CEP</button>
    </header>
  );
}

export default Header;