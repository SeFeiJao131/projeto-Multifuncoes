import { useState } from "react";

function TodoList() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  const adicionar = () => {
    if (input === "") return;
    setTarefas([...tarefas, input]);
    setInput("");
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma tarefa..."
      />

      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {tarefas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;