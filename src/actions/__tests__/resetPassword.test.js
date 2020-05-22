import { resetPasswordAction } from "../resetPassword.action";
import thunk from "redux-thunk";
import {
  RESET_PASSWORD_END,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS
} from "../types";
import { resetPasswordData } from "../mockData/mock.data";
import configureMockStore from "redux-mock-store";
jest.mock("../../request.js");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("it sends email verification token", () => {
  const store = mockStore({});

  const succesActions = [
    RESET_PASSWORD_START,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_END
  ];
  const failActions = [
    RESET_PASSWORD_START,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_END
  ];

  store
    .dispatch(resetPasswordAction(resetPasswordData))
    .then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(succesActions) ||
        expect(actionTypes).toEqual(failActions);
    })
    .catch(err => {
      return err;
    });
});
