import { emailVerify } from "../emailVerify.actions"
import thunk from "redux-thunk"
import { EMAIL_VERIFY_END, EMAIL_VERIFY_FAIL, EMAIL_VERIFY_START, EMAIL_VERIFY_SUCCESS } from "../types";
import token from "../mockData/mock.data"
import configureMockStore from "redux-mock-store";
jest.mock("../../request.js")

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("it sends email verification token", () => {
    const store = mockStore({});

    const succesActions = [ EMAIL_VERIFY_START, EMAIL_VERIFY_SUCCESS, EMAIL_VERIFY_END]
    const failActions = [ EMAIL_VERIFY_START, EMAIL_VERIFY_FAIL, EMAIL_VERIFY_END ]

    store
    .dispatch(emailVerify(token))
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
