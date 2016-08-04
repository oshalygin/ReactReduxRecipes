/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React, { PropTypes } from "react";
import IngredientsListRow from "./ingredientListRow.jsx";

describe("<IngredientsListRow />", () => {

    it("The ingredient passed in is properly displayed in the row", () => {

        const ingredient = "Apples";
        const props = { ingredient };
        const expected = ingredient;

        const wrapper = shallow(<IngredientsListRow {...props} />);
        const actual = wrapper.find("li").children().get(0).props.children[1];

        expect(actual).toEqual(expected);

    });


});
