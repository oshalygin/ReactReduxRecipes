import * as actionTypes from "./actionTypes";
import { xhrCallFailure } from "./xhrStatusActions";
import axios from "axios";

export function loadRecipesSuccess(recipes) {
    return {
        type: actionTypes.LOAD_RECIPES_SUCCESS,
        recipes
    };
}

export function updateRecipeSuccess(recipe) {
    return {
        type: actionTypes.UPDATE_RECIPE_SUCCESS,
        recipe
    };
}

export function loadRecipes() {
    return function (dispatch) {
        return axios.get("/api/recipe")
            .then(recipes => {
                dispatch(loadRecipesSuccess(recipes.data));
            })
            .catch(error => {
                dispatch(xhrCallFailure);
                throw (error);
            });
    };
}

export function updateRecipe(recipe) {
    return function (dispatch) {
        const toggledRecipe = Object.assign({}, recipe);
        toggledRecipe.checked = !recipe.checked;
        dispatch(updateRecipeSuccess(toggledRecipe));
    };
}


