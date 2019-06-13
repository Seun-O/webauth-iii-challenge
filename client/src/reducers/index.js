import {
  LOGIN,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_FAIL,
  GET_USER,
  GET_USER_FAIL
} from "../actions";

const INITIAL_STATE = {
  error: null,
  users: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case REGISTER:
      return {
        ...state
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case GET_USER:
      return {
        ...state,
        users: action.payload
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
