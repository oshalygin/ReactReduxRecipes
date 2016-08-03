import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function shoppingCartReducer(state = initialState.shoppingCart, action) {
    switch (action.type) {
        case actionTypes.LOAD_SHOPPINGCART_SUCCESS: {
            return action.shoppingCart;
        }
        case actionTypes.SAVE_SHOPPINGCART_SUCCESS: {
            const shoppingCartToPersist = [...action.shoppingCart];
            return shoppingCartToPersist;
        }
        default: {
            return state;
        }
    }
}