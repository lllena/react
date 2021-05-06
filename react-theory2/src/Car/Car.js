import React, { Component } from "react";
// import Radium from "radium";
import classes from "./Car.module.css";

class Car extends Component {
  componentWillReceiveProps;
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextProps.name.trim() !== this.props.name.trim();
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Car component will unmount!");
  }

  render() {
    console.log("Car render");
    const inputClasses = [classes.input];

    if (this.props.name !== "") {
      inputClasses.push("green");
    } else {
      inputClasses.push("red");
    }

    if (this.props.name.length > 4) {
      inputClasses.push("bold");
    }

    const style = {
      border: "1px solid #ccc",
      boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.14)",
      ":hover": {
        border: "1px solid #aaa",
        boxShadow: "0px 4px 15px 0 rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
      },
    };

    return (
      <div className={classes.Car} style={style}>
        <h3>Car name: {this.props.name}</h3>
        <p>
          Year: <strong>{this.props.year}</strong>
        </p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(" ")}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

export default Car;
