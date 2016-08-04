/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import RecipeTableRow from "./recipeTableRow.jsx";

describe("<RecipeTableRow />", () => {

    it("The table row contains 5 columns just like the Recipe Table", () => {
        const recipe =
            {
                id: "italian-risotto",
                name: "Risotto", type: "Italian",
                ingredients: ["Rice", "Chicken Stock"],
                checked: false
            };
        const props = { recipe, checked: function () { }, query: "" };
        const expected = 5;

        const wrapper = shallow(<RecipeTableRow {...props} />);
        const actual = wrapper.find("tr").children().length;
        expect(actual).toEqual(expected);

    });

    it("The row is populated with the recipe property", () => {
        const recipe =
            {
                id: "italian-risotto",
                name: "Risotto", type: "Italian",
                ingredients: ["Rice", "Chicken Stock"],
                checked: false

            };
        const props = { recipe, checked: function () { }, query: "" };
        const expected = 5;

        const wrapper = shallow(<RecipeTableRow {...props} />);
        const nameProperty = wrapper.find("tr").childAt(1).children().get(0);
        const typeProperty = wrapper.find("tr").childAt(2).children().get(0);

        expect(nameProperty).toEqual(recipe.name);
        expect(typeProperty).toEqual(recipe.type);

    });
});