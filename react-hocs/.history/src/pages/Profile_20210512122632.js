import React, { useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../context/github/githubContext";

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const name = match.params.name;

  useEffect(() => {
    getUser(name);
    getRepos(name);
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <Fragment>
      <Link to={"/"} className="btn btn-link">
        To home
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src='' alt=''/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
