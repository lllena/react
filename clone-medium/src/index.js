import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes";
import TopBar  from 'components/TopBar'
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from 'contexts/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <BrowserRouter>
          <TopBar />
          <Routes />
        </BrowserRouter>
      </CurrentUserChecker>
    </CurrentUserProvider>
    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

