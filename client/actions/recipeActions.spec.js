import expect from "expect";
// import mock from "mock-require";
import * as recipeActions from "./recipeActions";
import * as actionTypes from "./actionTypes";

import thunk from "redux-thunk";

import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Recipe Actions", () => {

    it("loadRecipesSuccess properly returns back an action type of 'LOAD_RECIPES_SUCCESS", () => {
        const recipes = [
            { type: "Mexican" },
            { type: "Italian" }
        ];

        const expected = actionTypes.LOAD_RECIPES_SUCCESS;
        const actual = recipeActions.loadRecipesSuccess(recipes).type;
        expect(actual).toEqual(expected);
    });

    it("updateRecipeSuccess properly returns back an action type of 'UPDATE_RECIPE_SUCCESS", () => {
        const recipe = [
            { type: "Mexican" }
        ];

        const expected = actionTypes.UPDATE_RECIPE_SUCCESS;
        const actual = recipeActions.updateRecipeSuccess(recipe).type;
        expect(actual).toEqual(expected);
    });

    it("updateRecipeSuccess properly returns back an action type of 'UPDATE_RECIPE_SUCCESS", () => {
        const recipe = [
            { type: "Mexican" }
        ];

        const expected = actionTypes.UPDATE_RECIPE_SUCCESS;
        const actual = recipeActions.updateRecipeSuccess(recipe).type;
        expect(actual).toEqual(expected);
    });

    it("calling loadRecipes properly makes a call to the api", () => {

        // const recipes = [
        //     { type: "Mexican" },
        //     { type: "Italian" }
        // ];

        // mock("axios", {
        //     get: function () {
        //         console.log("derp");
        //         return this;
        //     },
        //     then: function () {
        //         return recipes;
        //     }
        // });


        recipeActions.loadRecipes()().then(actual => {
            expect(actual).toEqual("hi");
        });

        // expect(actual).toEqual(expected);
    });
});