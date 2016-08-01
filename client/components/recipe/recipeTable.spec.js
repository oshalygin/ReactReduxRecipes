/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import RecipeTable from "./recipeTable.jsx";

describe("<RecipeTable />", () => {

    it("There are five table columns in the Recipe Table", () => {
        const recipes = [
            {
                id: "italian-risotto",
                name: "Risotto", type: "Italian",
                ingredients: ["Rice", "Chicken Stock"],
                checked: false
            },
            {
                id: "mexican-enchiladas",
                name: "Enchiladas", type: "Mexican",
                ingredients: ["Tomato Sauce", "Tomato"],
                checked: false
            }];
        const props = { recipes, checked: function () { } };
        const expected = 5;

        const wrapper = shallow(<RecipeTable {...props} />);
        const actual = wrapper.find("tr").children().length;
        expect(actual).toEqual(expected);

    });

    it("The column headers are 'Name', 'Type', 'Ingredients', 'Cook Time'", () => {
        const recipes = [
            {
                id: "italian-risotto",
                name: "Risotto", type: "Italian",
                ingredients: ["Rice", "Chicken Stock"],
                checked: false
            },
            {
                id: "mexican-enchiladas",
                name: "Enchiladas", type: "Mexican",
                ingredients: ["Tomato Sauce", "Tomato"],
                checked: false
            }];
        const props = { recipes, checked: function () { } };

        const wrapper = shallow(<RecipeTable {...props} />);
        const nameProperty = wrapper.find("tr").childAt(1).children().get(0);
        const typeProperty = wrapper.find("tr").childAt(2).children().get(0);
        const ingredientsProperty = wrapper.find("tr").childAt(3).children().get(0);
        const cookTimeProperty = wrapper.find("tr").childAt(4).children().get(0);

        expect(nameProperty).toEqual("Name");
        expect(typeProperty).toEqual("Type");
        expect(ingredientsProperty).toEqual("Ingredients");
        expect(cookTimeProperty).toEqual("Cook Time");

    });

});