/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import Header from "./header.jsx";

describe("<Header />", () => {

    it("The Header has the title of 'React Redux Recipes'", () => {
        const expected = "React Redux Recipes";
        const wrapper = shallow(<Header />);
        const actual = wrapper.find(".mdl-layout-title").get(0).props.children;

        expect(actual).toEqual(expected);

    });

});