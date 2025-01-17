import { useState } from "react";
import todosData from "../../assets/todos.json";
import TodoItem from "./TodoItem";
import s from "./TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [newString, setNewString] = useState("");

  const handleDelete = (id) => {
    const newData = todos.filter((item) => item.id != id);
    setTodos(newData);
  };

  const addTodo = () => {
    const newObj = {
      id: crypto.randomUUID(),
      todo: newString,
    };
    setTodos((prev) => [...prev, newObj]);
    setNewString("");
  };

  return (
    <div>
      <div className="flex">
        <input
          value={newString}
          onChange={(e) => setNewString(e.target.value)}
          className={s.input}
        />
        <button onClick={addTodo} className="btn border">
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map((item) => (
          <TodoItem key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
