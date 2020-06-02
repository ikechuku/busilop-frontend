import { ENTITY_DATA, ENTITY_DATA_ADD } from "./types";

export const getEntityData = () => ({
  type: ENTITY_DATA,
});

export const addEntityData = (res) => ({
  type: ENTITY_DATA_ADD,
  info: res,
});

export const addEntityDataAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(addEntityData(data));
    } catch (error) {
      console.log(error);
    }
  };
};


export const getEntityDataAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getEntityData());
    } catch (error) {
      console.log(error);
    }
  };
};