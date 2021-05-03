import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Audi A8", year: 2018 },
      { name: "Ford Focus", year: 2020 },
      { name: "Mazda", year: 2016 },
    ],
    pageTitle: "React components",
  };

  render() {
    const divStyle = {
      textAlign: "center",
    };

    const cars = this.state.cars;
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
      </div>
    );
  }
}

export default App;
