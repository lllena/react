import React, { useState } from "react";

function mathValue() {
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => mathValue());
  const [state, setState] = useState({
    title: "Counter",
    date: Date.now(),
  });

  function increment() {
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function changeTitle() {
    setState((prev) => {
      return { ...prev, title: "newTitle" };
    });
  }

  return (
    <div >
      <h1>Counter: {counter}</h1>
      <button className="btn btn-success" onClick={increment}>
        Add
      </button>
      <button className="btn btn-danger" onClick={decrement}>
        Del
      </button>
      <button className="btn btn-primary" onClick={changeTitle}>
        Change title
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
