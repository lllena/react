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

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    });
  };

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value,
    });
  };

  render() {
    const divStyle = {
      textAlign: "center",
    };

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handleInput} />

        <button onClick={this.changeTitleHandler.bind(this, "Changed!")}>
          Change title
        </button>

        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
