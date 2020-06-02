import { CONFIG_DATA, CONFIG_DATA_ADD } from "./types";

export const getConfigData = () => ({
  type: CONFIG_DATA,
});

export const addConfigData = (res) => ({
  type: CONFIG_DATA_ADD,
  info: res,
});

export const addConfigDataAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(addConfigData(data));
    } catch (error) {
      console.log(error);
    }
  };
};


export const getConfigDataAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getConfigData());
    } catch (error) {
      console.log(error);
    }
  };
};