import axios from "axios";
import React, { useReducer } from "react";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";
import { GithubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";

const CLIENT_ID = 'Iv1.cb648b8df4090d8e;
const CLIENT_SECRET = b31750936058cc41669e170daca77ccf2abd20d0;

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: null,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const search = async (value) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const getUser = async (name) => {
    setLoading();
    //..

    dispatch({
      type: GET_USER,
      payload: {},
    });
  };

  const getRepos = async (name) => {
    setLoading();
    //..

    dispatch({
      type: GET_REPOS,
      payload: [],
    });
  };

  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider
      value={{ setLoading, search, getUser, getRepos, clearUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};
