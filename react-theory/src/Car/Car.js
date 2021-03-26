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
export default () => (
  <h2>
        <p>This is car component</p>
        <p><strong>{Math.round(Math.random()*100)}</strong></p>
  </h2>
);
