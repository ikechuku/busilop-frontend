import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL
} from "../actions/types";

const initialState = {
  info: {},
  error: null,
  loading: false
};

const authStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    info: action.info,
    error: null,
    loading: false
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    info: action.info,
    loading: false
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
