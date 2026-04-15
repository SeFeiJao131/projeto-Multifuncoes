import { useState } from "react";

function TodoList() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  const adicionar = () => {
    setTarefas([...tarefas, input]);
    setInput("");
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
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