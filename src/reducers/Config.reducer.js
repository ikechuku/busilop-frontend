import { CONFIG_DATA, CONFIG_DATA_ADD } from "../actions/types";

const initialState = 
  { };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIG_DATA:
      return {...state};
    case CONFIG_DATA_ADD:
      return {...state, ...action.info};
    default:
      return state;
  }
};

export default reducer;
