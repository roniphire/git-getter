/** Types */
import {
  SET_LOADING,
  CLEAR_USERS,
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

/** Reducers */
export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
