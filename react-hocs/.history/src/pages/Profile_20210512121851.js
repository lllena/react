import React, { useContext } from "react";
import { GithubContext } from "../context/github/githubContext";

export const Profile = ({ match }) => {

  const github = useContext(GithubContext)
  const name = match.params.name

  gitpab

  return (
    <div>
      <h1>{ }</h1>
    </div>
  );
};
