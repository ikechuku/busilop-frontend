import { ENTITY_DATA, ENTITY_DATA_ADD } from "../actions/types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTITY_DATA:
      return [...state];
    case ENTITY_DATA_ADD:
      return [...state, action.info];
    default:
      return state;
  }
};

export default reducer;
