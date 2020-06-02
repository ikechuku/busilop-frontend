import { FORM_DATA, FORM_DATA_ADD } from "../actions/types";

const initialState = 
  { };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_DATA:
      return {...state};
    case FORM_DATA_ADD:
      return { ...action.info};
    default:
      return state;
  }
};

export default reducer;
