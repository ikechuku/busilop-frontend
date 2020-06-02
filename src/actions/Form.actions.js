import { FORM_DATA, FORM_DATA_ADD } from "./types";

export const getFormData = () => ({
  type: FORM_DATA,
});

export const addFormData = (res) => ({
  type: FORM_DATA_ADD,
  info: res,
});

export const addFormDataAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(addFormData(data));
    } catch (error) {
      console.log(error);
    }
  };
};


export const getFormDataAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getFormData());
    } catch (error) {
      console.log(error);
    }
  };
};