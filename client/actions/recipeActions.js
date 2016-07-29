import * as actionTypes from "./actionTypes";
import { xhrCallStarted, xhrCallFailure } from "./xhrStatusActions";
import axios from "axios";

export function loadRecipesSuccess(recipes) {
    return {
        type: actionTypes.LOAD_RECIPES_SUCCESS,
        recipes
    }
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

