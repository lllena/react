import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes";
import TopBar  from 'components/TopBar'
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopBar/>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

