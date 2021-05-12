import React, { useEffect, useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => setValue("");

  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear,
  };
}

function App() {
  const input = useInput("");

  return (
    <div className={"container pt-3"}>
      <input type="text" {...input.bind} />
      <button className="btn btn-warning" onClick={() => input.clear()}>
        Clear
      </button>
      <hr />
      <h1>{input.value}</h1>
    </div>
  );
}

export default App;
