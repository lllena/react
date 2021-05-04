import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Audi A8", year: 2018 },
      { name: "Ford Focus", year: 2020 },
      { name: "Mazda 6", year: 2016 },
    ],
    pageTitle: "React components",
    showCars: false,
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars });
  }

  togleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  deleteHandler(index) {
    console.log("delete!");
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({ cars });
  }

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
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={(event) =>
              this.onChangeName(event.target.value, index)
            }
          />
        );
      });
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.togleCarsHandler}>Toggle cars</button>
        <div style={{ width: "400px", margin: "auto", padding: "20px" }}>
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
