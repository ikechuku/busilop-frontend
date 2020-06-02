import { combineReducers } from "redux";
import entityStore from "./Entity.reducer";
import relationshipStore from "./Relationship.reducer";
import configStore from "./Config.reducer";
import formStore from "./Form.reducer"

export default combineReducers({
  entityStore,
  relationshipStore,
  configStore,
  formStore
});
