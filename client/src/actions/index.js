import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3300/api/`,
  headers: {
    token: localStorage.getItem("token")
  }
});

export const LOGIN = "LOGIN";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const login = credentials => dispatch => {
  api
    .post(`login`, credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN, payload: res.data });
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }));
};

export const REGISTER = "REGISTER";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const register = user => dispatch => {
  api
    .post(`register`, user)
    .then(res => {
      dispatch({ type: REGISTER, payload: res.data });
    })
    .catch(err => dispatch({ type: REGISTER_FAIL, payload: err }));
};

export const GET_USER = "GET_USER";
export const GET_USER_FAIL = "GET_USER_FAIL";
export const getUser = () => dispatch => {
  api
    .get(`users`)
    .then(res => {
      dispatch({ type: GET_USER, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_USER_FAIL, payload: err }));
};
