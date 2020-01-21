/** Dependencies */
import React, { useReducer } from 'react';
import axios from 'axios';

/** Context and reducer */
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

/** Types */
import {
  SET_LOADING,
  CLEAR_USERS,
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

/** Initiate state */
const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  /** Reducer hook */
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  /** Loading while async action */
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  /** Search Users action */
  const searchUsers = async text => {
    setLoading();

    // GET users from github
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  /** Clear users list action  */
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  /** GET single user action */
  const getUser = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //TODO GET Repos action

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
