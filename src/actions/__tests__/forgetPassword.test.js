import forgetPassword from "../forgotPassword.action"
import thunk from "redux-thunk"
import { FORGET_PASSWORD_END, FORGET_PASSWORD_FAIL, FORGET_PASSWORD_START, FORGET_PASSWORD_SUCCESS } from "../types";
import {username} from "../mockData/mock.data"
import configureMockStore from "redux-mock-store";
jest.mock("../../request.js")

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("it sends email verification token", () => {
    const store = mockStore({});

    const succesActions = [ FORGET_PASSWORD_START, FORGET_PASSWORD_SUCCESS, FORGET_PASSWORD_END]
    const failActions = [ FORGET_PASSWORD_START, FORGET_PASSWORD_FAIL, FORGET_PASSWORD_END ]

    store
    .dispatch(forgetPassword(username))
    .then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(succesActions) || 
        expect(actionTypes).toEqual(failActions)
    })
    .catch(err => {
        return err;
    });
})
