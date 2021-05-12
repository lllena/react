import React, {useContext} from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { GithubContext } from "../context/github/githubContext";

export const Home = () => {
 const {loading, users} = useContext(GithubContext);

  return (
    <React.Fragment>
      <Search />
      <div className="row pt-4">
        {loading ? <p className="text-canter">Loading...</p> :
        }
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
