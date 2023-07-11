import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  return (
    <div>
      <TodoForm onTodoAdd={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
