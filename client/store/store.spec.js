import expect from "expect";
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import * as recipeActions from "../actions/recipeActions";

describe("Store", () => {

    it("should return a list of recipes upon load", () => {
        const expected = 1;
        const initialState = {
            recipes: [{
                type: "Mexican",
                name: "Burritto"
            }]
        };
        const store = createStore(rootReducer, initialState);

        const action = recipeActions.loadRecipesSuccess(initialState.recipes);
        store.dispatch(action);

        const actual = store.getState().recipes.length;
        expect(actual).toEqual(expected);

    });
});