import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const { show } = useAlert();
  return (
    <>
      <h1>Hello in example with Context!</h1>
      <button onClick={()=>show('This text with main.js')} className="btn btn-success">
        Show alert
      </button>
    </>
  );
}
