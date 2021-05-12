import React from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";

export const Home = () => {
 

  return (
    <React.Fragment>
      <Search />
      <div className="row pt-4">
        {cards.map((card) => {
          return (
            <div className="col-sm-4 mb-4" key={card}>
              <Card />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
