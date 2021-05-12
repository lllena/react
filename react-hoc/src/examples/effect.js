import React, { useState, useEffect } from "react";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log("clear type");
    };
  }, [type]);

  const mouseMoveHandler = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    console.log(" COMponent did mount");

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove");
    };
  }, []);

  return (
    <div>
      <h1>Resource: {type}</h1>
      <button className="btn btn-secondary" onClick={() => setType("users")}>
        Users
      </button>
      <button className="btn btn-dark" onClick={() => setType("todos")}>
        Todo
      </button>
      <button className="btn btn-info" onClick={() => setType("posts")}>
        Posts
      </button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
