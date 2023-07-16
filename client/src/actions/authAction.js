import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./type";

const baseURL = "http://localhost:5000/api";

export const registerUserLoading = () => ({
  type: REGISTER_LOADING,
  payload: null,
});

export const registerUserSuccess = (responseData) => ({
  type: REGISTER_SUCCESS,
  payload: responseData,
});

export const registerUserFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const fetchRegisterUser = (userData) => {
  console.log("🚀 ~ file: authAction.js:26 ~ fetchUser ~ userData:", userData);
  return async (dispatch) => {
    dispatch(registerUserLoading());
    try {
      const response = await fetch(`${baseURL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const res = await response.json();
      console.log("🚀 ~ file: authAction.js:40 ~ return ~ res:", res);
      dispatch(registerUserSuccess(res.data));
    } catch (err) {
      dispatch(registerUserFailure(err));
    }
  };
};

export const loginUserLoading = () => ({
  type: LOGIN_LOADING,
  payload: null,
});

export const loginUserSuccess = (responseData) => ({
  type: LOGIN_SUCCESS,
  payload: responseData,
});

export const loginUserFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const fetchLoginUser = (userData) => {
  console.log("🚀 ~ file: authAction.js:64 loginUserInput", userData);
  return async (dispatch) => {
    dispatch(loginUserLoading());
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const res = await response.json();
      console.log("🚀 ~ file: authAction.js:67 ~ loginResponse:", res);
      dispatch(loginUserSuccess(res.data));
    } catch (err) {
      dispatch(loginUserFailure(err));
    }
  };
};
