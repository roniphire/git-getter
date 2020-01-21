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

  /** Search Users action */

  //TODO Clear users list action

  //TODO GET User action

  //TODO GET Repos action

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
