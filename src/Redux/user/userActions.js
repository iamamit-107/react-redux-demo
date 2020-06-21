import axios from "axios";

const {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} = require("./userTypes");

export const userRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const userSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const userFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(userRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const user = res.data;
        dispatch(userSuccess(user));
      })
      .catch((err) => {
        const msg = err.message;
        dispatch(userFailure(msg));
      });
  };
};
