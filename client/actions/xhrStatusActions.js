import * as actionTypes from "./actionTypes";

export function xhrCallStarted() {
    return {
        type: actionTypes.XHR_CALL_START
    };
}

export function xhrCallFailure() {
    return {
        type: actionTypes.XHR_CALL_FAILURE
    };
}