import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { loginData } from "../mockData/mock.data";

import { authLogin } from "../Login.actions";

import {
  AUTH_START,
  AUTH_SUCCESS
} from "../types";

jest.mock("../../request");


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


it("it creates an action to post a login", () => {
  const store = mockStore({});

  const expectedActions = [AUTH_START, AUTH_SUCCESS];
  store
    .dispatch(authLogin(loginData))
    .then(() => {
        const dispatchedActions = store.getActions();
        
        const actionTypes = dispatchedActions.map(action => action.type);
        
        
      expect(expectedActions).toEqual(actionTypes);
    })
    .catch(err => {
      fail("should not catch");
    });
});

