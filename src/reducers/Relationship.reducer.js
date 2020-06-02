import { RELATIONSHIP_DATA, RELATIONSHIP_DATA_ADD } from "../actions/types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RELATIONSHIP_DATA:
      return [...state];
    case RELATIONSHIP_DATA_ADD:
      return [...state, action.info];
    default:
      return state;
  }
};

export default reducer;
