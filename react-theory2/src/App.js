import React from "react";
import "./App.css";
import Car from "./Car/Car";

function App() {
  const divStyle = {
    textAlign: "center",
  };
  return (
    <div style={divStyle}>
      <h1>Hello world!</h1>
      <Car name={"Audi A8"} year={2018} />
      <Car name={"Ford Focus"} year={2020} />
      <Car name={"Mazda"} year={2016} />
    </div>
  );
}

export default App;
