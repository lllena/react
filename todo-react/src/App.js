import React, { useState } from "react";
import "./App.css";
import Context from "./todo/context";
import TodoList from "./todo/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Learning React" },
    { id: 2, completed: false, title: "Learning TypeScript" },
    { id: 3, completed: false, title: "Learning ReactNative" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo React</h1>
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
