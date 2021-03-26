import React, { createElement } from "react";
import "./App.css";
import Car from "./Car/Car";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello world!</h1>
      <Car />
      <Car />
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {
  //     className: 'App'
  //   },
  //   createElement(
  //     'h1',
  //     {},
  //     'Hello world!'
  //   )
  // )
}

export default App;
