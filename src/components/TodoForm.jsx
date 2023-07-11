import { useState } from "react";
import styles from "./TodoForm.module.css";
function TodoForm({ onTodoAdd }) {
  const [text, setText] = useState("");

  function handleOnAdd() {
    if (!text) return;
    const newTodo = {
      id: crypto.randomUUID(),
      title: text,
    };

    onTodoAdd(newTodo);
    setText("");
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleOnAdd} className={styles.btn}>
        Add Todo
      </button>
    </div>
  );
}

export default TodoForm;
