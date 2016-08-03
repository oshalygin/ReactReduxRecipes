import * as actionTypes from "./actionTypes";

export function saveShoppingCartSuccess(shoppingCart) {
    return {
        type: actionTypes.SAVE_SHOPPINGCART_SUCCESS,
        shoppingCart
    };
}

export function saveShoppingCart(shoppingCart) {
    return function (dispatch) {
        console.log("updating shoppingCart");
        const savedShoppingCart = Object.assign([], [...shoppingCart]);
        dispatch(saveShoppingCartSuccess(savedShoppingCart));
    };
}
