/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React, { PropTypes } from "react";
import IngredientsTableData, { highlight, highlightQuery } from "./ingredientsTableData.jsx";

describe("<IngredientsTableData />", () => {

    it("Highlight will appropriately render with a code wrapper", () => {

        const ingredient = "Apples";
        const index = 3;
        const searchCriteria = "le";
        const expected = `<code>${searchCriteria}</code>`;
        const result = highlight(ingredient, index, searchCriteria);

        const renderredOutput = shallow(result);
        const actual = renderredOutput.find("code").html();

        expect(actual).toEqual(expected);

    });

    it("The highlight function will properly expand the ingredients", () => {

        const ingredients = ["Apples", "Oranges", "Rice"];

        const searchCriteria = "le";
        const expected = "<span><span><span> <span>App<code>le</code>s</span> | </span> Oranges | </span> Rice | </span>";
        const result = highlightQuery(ingredients, searchCriteria);

        const renderredOutput = shallow(result);
        const actual = renderredOutput.html();

        expect(actual).toEqual(expected);

    });

    it("The table data was properly parsed in the table", () => {

        const ingredients = ["Apples", "Oranges", "Rice"];

        const searchCriteria = "le";
        const props = {
            ingredients,
            query: searchCriteria
        };
        const expected = "<span><span><span> <span>App<code>le</code>s</span> | </span> Oranges | </span> Rice | </span>";

        const renderredOutput = shallow(<IngredientsTableData {...props} />);
        const actual = renderredOutput.childAt(0).html();

        expect(actual).toEqual(expected);

    });

});