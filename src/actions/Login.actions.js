import request from "../request";
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "./types";

export const authStart = () => ({
  type: AUTH_START
});

export const authSuccess = res => ({
  type: AUTH_SUCCESS,
  info: res
});

export const authFail = error => ({
  type: AUTH_FAIL,
  info: error
});

export const authLogin = data => {
  return async dispatch => {
    try {
       dispatch(authStart());
       const res = await request({
         url: `api/auth/login/`,
         method: "POST",
         data: {
           user_name: data.username,
           password: data.password
         }
       });
      dispatch(authSuccess(res));
    } catch (error) {
      if (error.response) {
        dispatch(authFail(error.response));
      } else {
        dispatch(authFail(error));
      }
    }
   
  };
};
