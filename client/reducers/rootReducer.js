import { combineReducers } from "redux";
import recipes from "./recipeReducer";
import shoppingCart from "./shoppingCartReducer";

const rootReducer = combineReducers({
    recipes,
    shoppingCart
});

export default rootReducer;