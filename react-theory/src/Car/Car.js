import React from "react";

// function car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// const car = () => {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// const car = () => (
//   <h2>
//     This is car component <strong>test</strong>
//   </h2>
// );
export default props => (
  <h2>
    <h3>Car name : {props.name}</h3>
    <p>
      Year: <strong>{props.year}</strong>
    </p>
  </h2>
);
