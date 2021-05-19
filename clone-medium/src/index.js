import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes";
import TopBar  from 'components/TopBar'
import { BrowserRouter } from "react-router-dom";
import {CurrentUserProvider} from 'contexts/currentUser'

const App = () => {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <TopBar/>
        <Routes />
      </BrowserRouter>
    </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

