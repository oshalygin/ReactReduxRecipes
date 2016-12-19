import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeContainsSuccess(actionType) {
  const successSearch = 'SUCCESS';
  const errorSearch = 'FAILURE';
  return actionType.includes(successSearch) || actionType.includes(errorSearch);
}

export default function xhrStatusReducer(state = initialState.numberOfXHRCallsInProgress, action) {
  if (action.type === actionTypes.XHR_CALL_START) {
    return state + 1;
  } else if (actionTypeContainsSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
