import * as actionTypes from "./actionTypes";
import axios from "axios";

export function loadRecipesSuccess(recipes) {
    return {
        type: actionTypes.LOAD_RECIPES_SUCCESS,
        recipes
    }
}

export function loadRecipes() {
    return function (dispatch) {
        return axios.get("../../server/assets/recipes.json")
            .then(recipes => {
                dispatch(loadRecipesSuccess);
            })
    }
}