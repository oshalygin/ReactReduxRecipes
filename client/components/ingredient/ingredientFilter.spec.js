/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import IngredientFilter from "./ingredientFilter.jsx";

describe("<IngredientFilter />", () => {

    it("There exists an input box in the ingredient filter", () => {
        const onChange = function () { };
        const props = { onChange };

        const wrapper = shallow(<IngredientFilter {...props} />);
        const actual = wrapper.find("input").html();
        expect(actual).toNotBe(undefined); //eslint-disable-line no-undefined
    });

    it("The label for the filter is 'Filter Ingredient'", () => {
        const onChange = function () { };
        const props = { onChange };
        const expected = "Filter Ingredient";
        const wrapper = shallow(<IngredientFilter {...props} />);
        const actual = wrapper.find("label").children().get(0);

        expect(actual).toEqual(expected);
    });

});