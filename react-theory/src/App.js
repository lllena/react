import React, { createElement } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Comment {
  state = {
    cars: [
      {
        name: "Ford",
        year: 2018,
      },
      {
        name: "Audi",
        year: 2020,
      },
      {
        name: "Mazda",
        year: 2010,
      },
    ],
  };
  render() {
    const divStyle = {
      textAlign: "center"
    }
    const cars = this.state.cars;
    return (
      <div style={divStyle}>
        <h1>Hello world!</h1>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
      </div>
    );

  }
}

  export default this.render;



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


