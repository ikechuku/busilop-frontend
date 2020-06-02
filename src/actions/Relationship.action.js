import { RELATIONSHIP_DATA, RELATIONSHIP_DATA_ADD } from "./types";

export const getRelationshipData = () => ({
  type: RELATIONSHIP_DATA,
});

export const addRelationshipData = (res) => ({
  type: RELATIONSHIP_DATA_ADD,
  info: res,
});

export const addRelationshipDataAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(addRelationshipData(data));
    } catch (error) {
      console.log(error);
    }
  };
};


export const getRelationshipDataAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getRelationshipData());
    } catch (error) {
      console.log(error);
    }
  };
};