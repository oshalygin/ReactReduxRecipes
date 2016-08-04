import expect from "expect";
import mock from "mock-require";
import * as recipeActions from "./recipeActions";
import * as actionTypes from "./actionTypes";

import thunk from "redux-thunk";

import configureMockStore from "redux-mock-store";
const middleware = [thunk];
const mockStore = configureMockStore(middleware); //eslint-disable-line no-unused-vars


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

    it("calling loadRecipes properly makes a call to the api endpoint of '/api/recipe'", () => {

        const expected = "/api/recipe";

        mock("axios", {
            get: function (endpoint) {
                expect(endpoint).toEqual(expected);
                return this;
            },
            then: function () {
                return this;
            },
            catch: function () {
                return this;
            }
        });

        recipeActions.loadRecipes()();

    });

    it("calling loadRecipes calls the dispatch function", () => {

        const expected = typeof function () { };

        mock("axios", {
            get: function () {
                return this;
            },
            then: function (data) {
                let actual = typeof data;
                expect(actual).toEqual(expected);
                return this;
            },
            catch: function () {
                return this;
            }
        });


        recipeActions.loadRecipes()(function () { });

    });

    it("updating a recipe will properly toggle the checked flag from false to true", () => {

        const recipe = {
            type: "Mexican",
            checked: false
        };

        recipeActions.updateRecipe(recipe)(function () { });


    });
});