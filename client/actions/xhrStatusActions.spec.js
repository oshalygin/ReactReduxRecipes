import expect from "expect";
import * as xhrStatusActions from "./xhrStatusActions";
import * as actionTypes from "./actionTypes";

import thunk from "redux-thunk";

import configureMockStore from "redux-mock-store";
const middleware = [thunk];
const mockStore = configureMockStore(middleware); //eslint-disable-line no-unused-vars


describe("Xhr Status Actions", () => {

    it("xhrCallStarted properly returns back an action type of 'XHR_CALL_START", () => {

        const expected = actionTypes.XHR_CALL_START;
        const actual = xhrStatusActions.xhrCallStarted().type;
        expect(actual).toEqual(expected);
    });

     it("xhrCallFailure properly returns back an action type of 'XHR_CALL_FAILURE", () => {

        const expected = actionTypes.XHR_CALL_FAILURE;
        const actual = xhrStatusActions.xhrCallFailure().type;
        expect(actual).toEqual(expected);
    });

});