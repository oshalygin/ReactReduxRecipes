/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import IngredientList from "./ingredientList.jsx";

describe("<IngredientList />", () => {

    it("The number of ingredients passed to the list is how many list items are renderred", () => {
        const ingredients = ["Apples", "Oranges", "Bananas", "Rice"];
        const props = {ingredients};
        const expected = ingredients.length;

        const wrapper = shallow(<IngredientList {...props} />);
        const actual = wrapper.find("ul").children().length;

        expect(actual).toEqual(expected);

    });

});