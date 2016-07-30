import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function recipeReducer(state = initialState.recipes, action) {
    switch (action.type) {
        case actionTypes.LOAD_RECIPES_SUCCESS:
            {
                return action.recipes.reduce((recipes, recipe) => {
                    return [
                        ...recipes,
                        {...recipe, id: `${recipe.type.split(" ").join("-")}-${recipe.name}`.toLowerCase()} ];
            }, []);
    }
        default: {
        return state;
    }

}
}