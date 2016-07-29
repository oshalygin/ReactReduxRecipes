import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function recipeReducer(state = initialState.recipes, action) {
    switch (action.type) {
        case actionTypes.LOAD_RECIPES_SUCCESS:
            {
                return action.recipes.reduce((recipeObject, recipe) => {
                    return {
                    ...recipe,
                    id: `${recipe.type}-${recipe.name}` };
    }, { });
}
        default: {
    return state;
}
    }
}