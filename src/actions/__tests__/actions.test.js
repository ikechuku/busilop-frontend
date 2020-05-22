import axios from "axios";
import { createCustomer } from "../customer.action";
import { createVendor } from "../vendor.action";

import thunk from "redux-thunk";
import { SET_ACTIVITY, CREATE_USER } from "../types";
import configureMockStore from "redux-mock-store";
jest.mock("../../request");

import { customerData, vendorData } from "../mockData/mock.data";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("it creates an action to post a customer", () => {
  const store = mockStore({});

  const expectedActions = [SET_ACTIVITY, CREATE_USER, SET_ACTIVITY];
  store
    .dispatch(createCustomer(customerData))
    .then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    })
    .catch(err => {
      fail("should not catch");
    });
});


it("it creates an action to post a Vendor", () => {
  const store = mockStore({});

  const expectedActions = [SET_ACTIVITY, CREATE_USER, SET_ACTIVITY];
  store
    .dispatch(createVendor(vendorData))
    .then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    })
    .catch(err => {
      fail("should not catch");
    });
});
