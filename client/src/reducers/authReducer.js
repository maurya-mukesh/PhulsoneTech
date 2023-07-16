import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/type";

const initialState = {
  user: null,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        loading: false,
        userResponse: action.payload,
      };
    case REGISTER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
