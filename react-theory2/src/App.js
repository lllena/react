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
    showCars: false,
  };

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    });
  };

  togleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  render() {
    const divStyle = {
      textAlign: "center",
    };

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        );
      });
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.togleCarsHandler}>Toggle cars</button>
        {cars}
      </div>
    );
  }
}

export default App;
