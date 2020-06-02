import { ENTITY_DATA, ENTITY_DATA_ADD } from "../actions/types";

const initialState = [
  {
    name: "Employee",
    fields: [
      { field_title: "firstname", type: "String" },
      { field_title: "lastname", type: "String" },
      { field_title: "department", type: "String" },
    ],
  },
  {
    name: "Department",
    fields: [
      { field_title: "Name", type: "String" },
      { field_title: "NoOfEmployees", type: "Long" },
    ],
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTITY_DATA:
      return [...state];
    case ENTITY_DATA_ADD:
      return [...state, action.info]
    default:
      return state;
  }
};

export default reducer;
