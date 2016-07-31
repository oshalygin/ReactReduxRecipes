/* eslint-disable max-len */

import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function recipeReducer(state = initialState.recipes, action) {
    switch (action.type) {
        case actionTypes.LOAD_RECIPES_SUCCESS: {
                return action.recipes.reduce((recipes, recipe) => {
                    return [
                        ...recipes,
                        {...recipe,
                        id: `${recipe.type.split(" ").join("-")}-${recipe.name}`.toLowerCase(),
                        checked: false} ];
            }, []);
        }
        case actionTypes.UPDATE_RECIPE_SUCCESS: {
                    let updatedRecipe = [...state];
                    let existingRecipeIndex = updatedRecipe.findIndex(recipe => recipe.id === action.recipe.id);
                    updatedRecipe.splice(existingRecipeIndex, 1, Object.assign({}, action.recipe));

                    return [
                        ...updatedRecipe
                    ];
        }
        default: {
                return state;
        }
    }
}